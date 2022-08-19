import { useRef, useMemo, useCallback } from 'react'
import { useFirstMountState, useToggle } from 'react-use'
import {useSelector as useReduxSelector, useDispatch as useReduxDispatch, TypedUseSelectorHook } from 'react-redux'
import { AppState, AppDispatch } from '@/store'
import { ApiState, Api, ApiStatus } from '@/types/api'

export type ApiReuslt<Data> = Api<Data> & {
    isIdle: boolean
    isLoading: boolean
    isSuccessed: boolean
    isFailed: boolean
}

export const useDispatch = useReduxDispatch<AppDispatch>
export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector

/* TODO: preventing unnecessary re-renders. think? when? needed? */
export const useApi = <Data>(
    apiKey: keyof ApiState,
    options: {
        initReset?: boolean
        handleData?: (data) => Data
    } = {}
): ApiReuslt<Data> & {
    resetApiState: (reRender?: boolean) => void
} => {
    const {
        initReset = true,
        handleData = d => d,
    } = options
    // State control
    const isMount = useFirstMountState()
    const [, toogleReRender] = useToggle(false)

    // Store
    const apiState = useSelector((state) => state.api[apiKey])
    const state = useRef<ApiReuslt<Data>>({
        ...apiState,
        data: handleData(apiState.data),
        // BooleanStatus
        isIdle:  initReset ? true : apiState.status === ApiStatus.idle,
        isLoading: initReset ? false : apiState.status === ApiStatus.loading,
        isSuccessed: initReset ? false : apiState.status === ApiStatus.successed,
        isFailed: initReset ? false : apiState.status === ApiStatus.failed,
    })

    /*
    ** Watch apiState change use useMemo dependency
     */
    useMemo(() => {
        if (isMount) return
        state.current = {
            ...apiState,
            data: handleData(apiState.data),
            isIdle:  apiState.status === ApiStatus.idle,
            isLoading: apiState.status === ApiStatus.loading,
            isSuccessed: apiState.status === ApiStatus.successed,
            isFailed: apiState.status === ApiStatus.failed,
        }
    }, [apiState])

    /*
    ** Provide an outside function to reset BooleanStatus and trigger re-render or not
     */
    const resetApiState = useCallback((reRender?: boolean) => {
        state.current = {
            ...state.current,
            isIdle: true,
            isLoading: false,
            isSuccessed: false,
            isFailed: false,
        }
        if (reRender) toogleReRender()
    }, [])

    return {
        ...state.current,
        resetApiState,
    }
}

export {
    ApiStatus,
}