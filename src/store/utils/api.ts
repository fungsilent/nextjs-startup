import getConfig from 'next/config'
import axios, { AxiosResponse } from 'axios'
import { serialize } from 'object-to-formdata'
import { createAsyncThunk, ActionReducerMapBuilder, AsyncThunk, AsyncThunkPayloadCreator } from '@reduxjs/toolkit'
import { ApiStatus, ApiResponseStatus, ResponseData } from '@/types/api'

const { apiBaseUrl } = getConfig().publicRuntimeConfig

/*
** mapApiReducers: a helper to map the api status reducers
*/
/* TODO: clarify type (Returned, ThunkArg) */
export const mapApiReducers = <ApiState, Returned, ThunkArg>(
    builder: ActionReducerMapBuilder<ApiState>,
    apiAction: AsyncThunk<Returned, ThunkArg, {}>,
    path: string,
): void => {
    builder.addCase(apiAction.pending, state => {
        state[path].status = ApiStatus.loading
    })
    builder.addCase(apiAction.fulfilled, (state, action) => {
        state[path].status = ApiStatus.successed
        state[path].data = action.payload
    })
    builder.addCase(apiAction.rejected, (state, action) => {
        state[path].status = ApiStatus.failed
        state[path].error = action.payload
    })
}

/*
** setApiData: a helper to set common api data
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
** ApplyApi: an axios helper to set data and apply
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
** createApiThunk: a helper to simplify api thunk creation
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
** handleResponse: a helper to simplify response handling
*/
export const handleResponse = <ApiData>(response: AxiosResponse<ResponseData<ApiData>>) => {
    if (response.data.result !== ApiResponseStatus[ApiResponseStatus.success]) {
        throw new Error('Request Failed')
    }
    return response.data.data
}