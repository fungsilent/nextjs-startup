import getConfig from 'next/config'
import { reduce, forEach } from 'lodash'
import axios, { AxiosResponse } from 'axios'
import { serialize } from 'object-to-formdata'
import { createAsyncThunk, ActionReducerMapBuilder, AsyncThunk, AsyncThunkPayloadCreator } from '@reduxjs/toolkit'
import { Api, ApiState, ApiStatus, ApiResponseStatus, ResponseData } from '@/types/api'

const { apiBaseUrl } = getConfig().publicRuntimeConfig

/*
** setApiData: A helper to set common api data
*/
export const setApiData = <Data = object>(data: Data, type: string): Data => {
    return {
        ...data,
        data_type: type,
        status: 'active',
        data_status: 'active',
    }
}

/*
** ApplyApi: An axios helper to set data and apply
*/
type ApplyApi = {
    serialize: (endpoint: string, data: {}) => FormData
    post: <ApiData>(endpoint: string, data: {}, config?: {}) => Promise<AxiosResponse<ResponseData<ApiData>>>
}
export const applyApi: ApplyApi = {
    serialize: (endpoint: string, data = {}): FormData => (serialize({
        [endpoint]: JSON.stringify(data)
    })),
    post: async (endpoint: string, data, config?) => {
        return await axios.post(apiBaseUrl, applyApi.serialize(endpoint, data), {
            ...config,
        })
    },
}

/*
** createApiThunk: A helper to simplify api thunk creation
*/
export const createApiThunk = <ApiData>(
    type: string,
    thunk: AsyncThunkPayloadCreator<ApiData, ApiData>,
): AsyncThunk<ApiData, ApiData, {}> => {
    return createAsyncThunk<ApiData, ApiData, {}>(
        type,
        async (arg, thunkApi) => {
            try {
                return await thunk(arg, thunkApi)
            } catch (err) {
                return thunkApi.rejectWithValue(err.message)
            }
        },
    )
}

/*
** handleResponse: A helper to simplify response handling
*/
export const handleResponse = <ApiData>(response: AxiosResponse<ResponseData<ApiData>>) => {
    switch(response.data.result) {
        case ApiResponseStatus.success: {
            return response.data.data
        }
        case ApiResponseStatus.fail: {
            console.log('Request Error', response.data.feedback)
            throw new Error('Request Failed')
        }
        default: {
            throw new Error('Unknown Failed')
        }
    }
}

/*
** mapApiReducers: A helper to map the api status reducers
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

/*
** createApiSlice: A helper to map the api status reducers
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