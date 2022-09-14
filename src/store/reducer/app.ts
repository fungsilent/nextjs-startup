import { createSlice } from '@reduxjs/toolkit'

type AppStoreType = {
    isSsr: boolean 
}

const initialState: AppStoreType = {
    isSsr: true,
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toCsr(state) {
            state.isSsr = false
        },
    }
})

export const { toCsr } = appSlice.actions
export default appSlice.reducer