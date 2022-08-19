import axios from 'axios'
import { serialize } from 'object-to-formdata'
import getConfig from 'next/config'
import { ActionReducerMapBuilder, AsyncThunk } from '@reduxjs/toolkit'
import { ApiStatus } from '@/types/api'
import _ from 'lodash'

const { apiBaseUrl } = getConfig().publicRuntimeConfig

/* TODO: clarify type */
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

export const applyApi = {
    serialize: (endpoint: string, data = {}): FormData => (serialize({
        [endpoint]: JSON.stringify(data)
    })),
    post: async (endpoint: string, data, config?) => {
        return await axios.post(apiBaseUrl, applyApi.serialize(endpoint, data), {
            ...config,
        })
    }
}

export const setApiData = <TData = object>(data: TData, type: string): TData => {
    return {
        ...data,
        data_type: type,
        status: 'active',
        data_status: 'active',
    }
}