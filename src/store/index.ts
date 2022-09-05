import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
// reducer
import apiReducer from './reducer/api'
import normalReducer from './reducer/normal'

const appStore = configureStore({
    reducer: {
        normal: normalReducer,
        api: apiReducer,
    },
    middleware: (getDefaultMiddleware) => {
        const middleware = getDefaultMiddleware()
        if (process.env.NODE_ENV === 'development') {
            return middleware.concat(createLogger({
                collapsed: true,
            }))
        }
        return middleware
    },
})

export type AppState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch
export {
    appStore,
    Provider,
}