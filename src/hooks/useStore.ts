import { useRef, useMemo, useCallback } from 'react'
import { useFirstMountState, useUpdate } from 'react-use'
import {useSelector as useReduxSelector, useDispatch as useReduxDispatch, TypedUseSelectorHook } from 'react-redux'
import { unwrapResult, AsyncThunk } from '@reduxjs/toolkit'
import { AppState, AppDispatch } from '@/store'
import { ApiState, Api, ApiStatus } from '@/types/api'

export type ApiReuslt<Data> = Api<Data> & {
    isIdle: boolean
    isLoading: boolean
    isSuccessed: boolean
    isFailed: boolean
}

export type ApiReuslt2 = Api & {
    isIdle: boolean
    isLoading: boolean
    isSuccessed: boolean
    isFailed: boolean
}

export const useDispatch = useReduxDispatch<AppDispatch>
export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector

/**
 * useApiAction: wrap the api action with dispatch
 */
export const useApiAction = <Data, Arg>(action: AsyncThunk<Data, Arg, {}>): (arg: Arg) => Promise<Data> => {
    const dispatch = useDispatch()
    return useCallback((arg: Arg) => {
        return dispatch(action(arg))
            .then(result => unwrapResult(result))
            .catch(err => Promise.reject(err))
    }, [dispatch, action])
}

/**
 * useApi2: apply api with selector and dispatch
 */
export const useApi = <
    Data,
    Arg,
    Selected = Data
>(
    key: keyof ApiState,
    action: AsyncThunk<Data, Arg, {}>,
    options: {
        initReset?: boolean
        handleData?: (data: Data) => Selected
    } = {}
): ApiReuslt<Selected> & {
    resetApiState: (reRender?: boolean) => void
    action: ReturnType<typeof useApiAction<Data, Arg>>
} => {
    const {
        initReset = true,
        handleData = (data: Data) => data,
    } = options

    // State control
    const isMount = useFirstMountState()
    const doReRender = useUpdate()

    // Store
    const actionWithDispatch = useApiAction(action)
    const apiState = useSelector((state) => state.api[key]) as Api<Data>
    if (!apiState) throw new Error(`[useApi]: apiState not found (apiKey: ${key})`)

    const state = useRef({
        ...apiState,
        data: handleData(apiState.data) as Selected,
        // BooleanStatus
        isIdle:  initReset ? true : apiState.status === ApiStatus.idle,
        isLoading: initReset ? false : apiState.status === ApiStatus.loading,
        isSuccessed: initReset ? false : apiState.status === ApiStatus.successed,
        isFailed: initReset ? false : apiState.status === ApiStatus.failed,
    })

    /**
     * Watch apiState change use useMemo dependency
     */
    useMemo(() => {
        if (isMount) return
        state.current = {
            ...apiState,
            data: handleData(apiState.data) as Selected,
            isIdle:  apiState.status === ApiStatus.idle,
            isLoading: apiState.status === ApiStatus.loading,
            isSuccessed: apiState.status === ApiStatus.successed,
            isFailed: apiState.status === ApiStatus.failed,
        }
    }, [apiState])

    /**
     * Provide an outside function to reset BooleanStatus and trigger re-render or not
     */
    const resetApiState = useCallback((reRender?: boolean) => {
        state.current = {
            ...state.current,
            isIdle: true,
            isLoading: false,
            isSuccessed: false,
            isFailed: false,
        }
        if (reRender) doReRender()
    }, [])

    return {
        ...state.current,
        action: actionWithDispatch,
        resetApiState,
    }
}

export {
    ApiStatus,
}