import { configureStore } from '@reduxjs/toolkit'
import ActionReducer from './features/actions'

export const store = configureStore({
    reducer: {
        actions: ActionReducer
    },
})