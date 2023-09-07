"use client"

import { useDispatch } from "react-redux";
import basketSlice from "@/store/BasketSlice";


function AddBasketButton({ product }) {
    const dispatch = useDispatch();
    const handleAddBasket = () => {
        dispatch(basketSlice.actions.AddBasket(product))
    };
    return (
        <button onClick={handleAddBasket} className=' bg-sky-500 px-2 py-4 text-sm' >Sepete Ekle</button>
    )
}

export default AddBasketButton