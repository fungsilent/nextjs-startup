import _ from 'lodash'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { applyApi, setApiData } from '@/store/utils/api'
import { ApiResponseStatus } from '@/types/api'

export type AddContactData = {
    name: string
    phone: string
    email: string
    content: string
}

// Actions
/* TODO: handle return data type */
export const addContact = createAsyncThunk(
    'addContact',
    async (arg: AddContactData, { rejectWithValue }) => {
        try {
            const data = setApiData(arg, 'contact_us_data')
            const response = await applyApi.post('add_contact_us', data)
            if (response.data.result === ApiResponseStatus[ApiResponseStatus.fail]) {
                throw new Error('Request Failed')
            }
            return response.data.data as AddContactData
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)