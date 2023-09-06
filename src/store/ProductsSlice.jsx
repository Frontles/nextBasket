import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    product: {},
    products: [],
}
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    const prod = await res.json()


    return prod;
})


export const fetchProduct = createAsyncThunk("product/fetchProduct", async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const prod = await res.json()


    return prod;
})

const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload
        });
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.product = action.payload
        })

    }
})


export const products = (state) => state.products.products
export const product = (state) => state.products.product

export default ProductsSlice