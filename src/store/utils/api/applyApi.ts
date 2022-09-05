import getConfig from 'next/config'
import axios, { AxiosResponse } from 'axios'
import { serialize } from 'object-to-formdata'
import { ApiResponseStatus, ResponseData } from '@/types/api'
import Promise from 'bluebird'

const { apiBaseUrl } = getConfig().publicRuntimeConfig

export const applyApi = {
    /**
     * setApiData: set common api data
     */
    setData: <Data = object>(data: Data, type: string): Data => ({
        ...data,
        data_type: type,
        status: 'active',
        data_status: 'active',
    }),
    /**
     * serialize: convert object data to FormData 
     */
    serialize: (endpoint: string, data: {}): FormData => (serialize({
        [endpoint]: JSON.stringify(data)
    })),
    /**
     * post: send request by post method
     */
    post: async <ApiData>(endpoint: string, data: {}, config = {}): Promise<AxiosResponse<ResponseData<ApiData>>> => {
        return await axios.post(apiBaseUrl, applyApi.serialize(endpoint, data), {
            ...config,
        })
    },
    /**
     * handleResponse: handle Response result
     */
    handleResponse: <ApiData>(response: AxiosResponse<ResponseData<ApiData>>): ApiData => {
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
}