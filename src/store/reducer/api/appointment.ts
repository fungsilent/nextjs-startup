import _ from 'lodash'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { applyApi, setApiData } from '@/store/utils/api'
import { ApiResponseStatus } from '@/types/api'

export type AddAppointmentData = {
    date: string
    time: string
    name: string
    mobile: string
    email: string
    plate: string
    center: string
    remarks: string
}

// Actions
/* TODO: handle return data type */
export const addAppointment = createAsyncThunk(
    'addAppointment',
    async (arg: AddAppointmentData, { rejectWithValue }) => {
        try {
            const data = setApiData(arg, 'powermoto_appointment_data')
            const response = await applyApi.post('add_appointment', data)
            if (response.data.result === ApiResponseStatus[ApiResponseStatus.fail]) {
                throw new Error('Request Failed')
            }
            return response.data.data as AddAppointmentData
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)