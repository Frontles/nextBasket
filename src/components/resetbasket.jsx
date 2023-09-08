"use client"

import { useDispatch } from "react-redux";
import basketSlice from "@/store/BasketSlice";


function ResetBasket() {
    const dispatch = useDispatch();
    const handleResetBasket = () => {
        dispatch(basketSlice.actions.ResetBasket())
    };
    return (
        <button onClick={handleResetBasket} className=' bg-sky-500 px-2 py-4 text-sm' >Temizle</button>
    )
}

export default ResetBasket