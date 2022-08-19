import { createSlice } from '@reduxjs/toolkit'

type NormalStoreType = {
    counter: number 
}

const initialState: NormalStoreType = {
    counter: 0,
}

const normalSlice = createSlice({
    name: 'normal',
    initialState,
    reducers: {
        addCounter(state) {
            state.counter += 1
        },
    }
})

export const { addCounter } = normalSlice.actions
export default normalSlice.reducer