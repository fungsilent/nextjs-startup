import { createSlice } from '@reduxjs/toolkit'
import { createApiSlice } from '@/store/utils/api'

// Actions
import { fetchSystem } from './system'
import { addContact } from './contact'

const { initialState, mapReducers }  = createApiSlice({
    fetchSystem,
    addContact,
})

const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {},
    extraReducers: builder => {
        mapReducers(builder)
    }
})

// export const {} = apiSlice.actions
export default apiSlice.reducer