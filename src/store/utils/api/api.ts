import { reduce, forEach } from 'lodash'
import { createAsyncThunk, ActionReducerMapBuilder, AsyncThunk, AsyncThunkPayloadCreator } from '@reduxjs/toolkit'
import { Api, ApiState, ApiStatus } from '@/types/api'
import Promise from 'bluebird'

/**
 * createApiThunk: A helper to simplify api thunk creation
 */
export const createApiThunk = <ApiData, Returned = ApiData>(
    type: string,
    thunk: AsyncThunkPayloadCreator<Returned, ApiData>,
    options?: {
        debug?: boolean
        status?: Exclude<ApiStatus, ApiStatus.idle>
        data?: unknown
        delay?: number
    }
): AsyncThunk<Returned, ApiData, {}> => {
    const {
        status,
        data,
        debug = false,
        delay = 0,
    } = options ?? {}
    return createAsyncThunk<Returned, ApiData, {}>(
        type,
        async (arg, thunkApi): Promise<ReturnType<AsyncThunkPayloadCreator<Returned, ApiData>>> => {
            // Debug
            if (debug) {
                switch(status) {
                    case ApiStatus.successed: {
                        return await Promise.delay(delay).then(() => data as Returned)
                    }
                    case ApiStatus.failed: {
                        return await Promise.delay(delay).then(() => thunkApi.rejectWithValue('Debug: Request Failed'))
                    }
                    case ApiStatus.loading:
                    default: {
                        await new Promise(() => {})
                    }
                }
            }
            try {
                return await thunk(arg, thunkApi)
            } catch (err: unknown) {
                let message = 'Unknown Error'
                if (typeof err === "string") {
                    message = err
                } else if (err instanceof Error) {
                    message = err.message
                }
                return thunkApi.rejectWithValue(message)
            }
        },
    )
}

/**
 * mapApiReducers: A helper to map the api status reducers
 */
export const mapApiReducers = (
    builder: ActionReducerMapBuilder<ApiState>,
    apiAction: AsyncThunk<any, any, {}>,
    name: keyof ApiState,
): void => {
    builder.addCase(apiAction.pending, state => {
        state[name].status = ApiStatus.loading
    })
    builder.addCase(apiAction.fulfilled, (state, action) => {
        state[name].status = ApiStatus.successed
        state[name].data = action.payload
    })
    builder.addCase(apiAction.rejected, (state, action) => {
        state[name].status = ApiStatus.failed
        state[name].error = action.payload as string
    })
}

/**
 * createApiSlice: A helper to map the api status reducers
 */
type CreateApiSlice = (
    actions: {[action: string]: AsyncThunk<any, any, {}>}
) => {
    initialState: ApiState,
    mapReducers: (builder: ActionReducerMapBuilder<ApiState>) => void
}
export const createApiSlice: CreateApiSlice = actions => {
    const defaultApi: Api = {
        status: ApiStatus.idle,
        data: null,
        error: '',
    }
    const initialState = reduce(actions, (combine, action, name) => {
        combine = {
            ...combine,
            [name]: { ...defaultApi }
        }
        return combine
    }, {} as ApiState)
    return {
        initialState,
        mapReducers: (builder) => {
            forEach(actions, (action, name) => {
                mapApiReducers(builder, action, name)
            })
        }
    }
}