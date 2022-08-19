import { createSlice } from '@reduxjs/toolkit'

type NormalStoreType = {
    text: string 
}

const initialState: NormalStoreType = {
    text: 'init',
}

const normalSlice = createSlice({
    name: 'normal',
    initialState,
    reducers: {
        changeText(state) {
            state.text = 'A'
        },
    }
})

export const normalActions = normalSlice.actions
export default normalSlice.reducer