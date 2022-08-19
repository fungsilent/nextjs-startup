import { createSlice } from '@reduxjs/toolkit'
import { mapApiReducers } from '@/store/utils/api'
import { ApiState, ApiStatus } from '@/types/api'

// Actions
import { fetchSystem } from './system'
import { addAppointment } from './appointment'
import { addContact } from './contact'

/* TODO: build a api store generation helper function to get initial state and for type checking */
const defaultApi = {
    status: ApiStatus.idle,
    data: null,
    error: '',
}

const initialState: ApiState = {
    fetchSystem: {
        ...defaultApi,
    },
    addAppointment: {
        ...defaultApi,
    },
    addContact: {
        ...defaultApi,
    },
}

const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {},
    extraReducers: builder => {
        mapApiReducers(builder, fetchSystem, 'fetchSystem')
        mapApiReducers(builder, addAppointment, 'addAppointment')
        mapApiReducers(builder, addContact, 'addContact')
    }
})

// export const {} = apiSlice.actions
export default apiSlice.reducer