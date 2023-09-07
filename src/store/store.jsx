import { configureStore } from '@reduxjs/toolkit'
import User from './UserSlice'
import { createWrapper } from 'next-redux-wrapper'
import BasketSlice from './BasketSlice'

const makeStore = () => {
    return configureStore({
        reducer: {
            user: User.reducer,
            basket: BasketSlice.reducer

        },
        devTools: true,

    })
}

export const wrapper = createWrapper(makeStore)


