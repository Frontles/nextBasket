"use client"
import { useSelector } from "react-redux"
import { sepet } from "@/store/BasketSlice"

function Basket() {
    const basket = useSelector(sepet)


    const totalPrice = basket.reduce((acc, product) => {
        return acc + product.price
    }, 0)
    return (
        <div className="font-bold text-sky-400">Sepet : {totalPrice ? totalPrice.toFixed(2) + " TL" : "Sepette Ürün Yok"}  </div>
    )
}

export default Basket