import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// reducer
import apiReducer from './reducer/api'
import normalReducer from './reducer/normal'

const appStore = configureStore({
    reducer: {
        normal: normalReducer,
        api: apiReducer,
    },
})

export type AppState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch
export {
    appStore,
    Provider,
}