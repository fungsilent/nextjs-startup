import { createApiThunk, applyApi } from '@/store/utils/api'
import { ApiStatus } from '@/types/api'
import axios from 'axios'

export type FetchTestData = {
    key: string
}

export type FetchTestDataReturned = {
    key: string
    code: string
}

// Actions
export const fetchTest = createApiThunk<FetchTestData, FetchTestDataReturned>(
    'fetchTest',
    async (arg) => {
        // const data = applyApi.setData(arg, 'contact_us_data')
        // const response = await applyApi.post<FetchTestData>('add_contact_us', data)
        // return applyApi.handleResponse(response)

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