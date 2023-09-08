import { configureStore } from '@reduxjs/toolkit'
import User from './UserSlice'
import { createWrapper } from 'next-redux-wrapper'
import BasketSlice from './BasketSlice'
import storage from "redux-persist/lib/storage"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'


const persistConfig = {
    key: "item",
    storage,
    version: 1
}


const reducer = combineReducers({
    user: User.reducer,
    basket: BasketSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, reducer)
const makeStore = () => {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),

    })
}

export const wrapper = createWrapper(makeStore)


