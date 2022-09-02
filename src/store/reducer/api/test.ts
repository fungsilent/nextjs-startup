import { createApiThunk, applyApi, setApiData, handleResponse } from '@/store/utils/api'
import { ApiStatus } from '@/types/api'
import axios from 'axios'

export type FetchTestData = {
    key: string
    id?: number
}

export type FetchTestDataReturned = {
    key: string
    code: string
}

// Actions
export const fetchTest = createApiThunk<FetchTestData, FetchTestDataReturned>(
    'fetchTest',
    async (arg) => {
        const response = await axios.get('https://restcountries.com/v3.1/alpha', {
            params: {
                codes: arg.key
            }
        })
        return response.data[0] as FetchTestDataReturned
    },
    {
        debug: false,
        status: ApiStatus.successed,
        delay: 1000,
    }
)