import { createAsyncThunk } from '@reduxjs/toolkit'
import { applyApi } from '@/store/utils/api'
import { ApiResponseStatus } from '@/types/api'

// Actions
/* TODO: handle return data type */
export const fetchSystem = createAsyncThunk(
    'fetchSystem',
    async (arg, { rejectWithValue }) => {
        try {
            const response = await applyApi.post('get_system', {})
            // throw new Error('Request Failed')
            if (response.data.result === ApiResponseStatus[ApiResponseStatus.fail]) {
                throw new Error('Request Failed')
            }
            return response.data.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)