import { configureStore } from '@reduxjs/toolkit'
import User from './UserSlice'
import Products from './ProductsSlice'
import { createWrapper } from 'next-redux-wrapper'
import BasketSlice from './BasketSlice'

const makeStore = () => {
    return configureStore({
        reducer: {
            products: Products.reducer,
            user: User.reducer,
            basket: BasketSlice.reducer

        },
        devTools: true,

    })
}

export const wrapper = createWrapper(makeStore)


/*

export const store = configureStore({
    reducer: {

        user: User,
        products: Products,
    },
})
*/