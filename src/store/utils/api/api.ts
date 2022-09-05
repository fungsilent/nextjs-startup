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
        data?: ApiData
        delay?: number
    }
): AsyncThunk<Returned, ApiData, {}> => {
    const {
        status,
        debug = false,
        data = null,
        delay = 0,
    } = options ?? {}
    return createAsyncThunk<Returned, ApiData, {}>(
        type,
        async (arg, thunkApi) => {
            // Debug
            if (debug) {
                switch(status) {
                    case ApiStatus.successed: {
                        return new Promise.delay(delay).then(() => data)
                    }
                    case ApiStatus.failed: {
                        return new Promise.delay(delay).then(() => thunkApi.rejectWithValue('Debug: Request Failed'))
                    }
                    case ApiStatus.loading:
                    default: {
                        return new Promise(() => {}) 
                    }
                }
            }
            try {
                return await thunk(arg, thunkApi)
            } catch (err) {
                return thunkApi.rejectWithValue(err.message)
            }
        },
    )
}

/**
 * mapApiReducers: A helper to map the api status reducers
 */
export const mapApiReducers = <ApiState, ApiData>(
    builder: ActionReducerMapBuilder<ApiState>,
    apiAction: AsyncThunk<ApiData, ApiData, {}>,
    name: string,
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
        state[name].error = action.payload
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
    const { initialState, reducers } = reduce(actions, (combine, action, name) => {
        combine.initialState = {
            ...combine.initialState,
            [name]: { ...defaultApi }
        }
        combine.reducers = {
            ...combine.reducers,
            [name]: action
        }
        return combine
    }, {
        initialState: {} as ApiState,
        reducers: {},   // TODO: type needed?
    })
    return {
        initialState,
        mapReducers: (builder) => {
            forEach(reducers, (action, name) => {
                mapApiReducers(builder, action, name)
            })
        }
    }
}