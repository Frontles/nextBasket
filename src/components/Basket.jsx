"use client"
import { useSelector } from "react-redux"
import { sepet } from "@/store/BasketSlice"
import { useEffect, useState } from "react"

function Basket() {
    const basket = useSelector(sepet)
    const [totalPrice, setTotalPrice] = useState(0);
    const [user, setUser] = useState({
        name: 'Test',
        surname: ' Test'
    });


    useEffect(
        () => {
            setTotalPrice(prev => {
                return basket.reduce((acc, product) => {
                    return acc + product.vote_average
                }, 0)
            })
        }, [basket])

    return (
        <div className="font-bold text-sky-400">Sepet : {totalPrice ? totalPrice.toFixed(2) + " TL" : "Sepette Ürün Yok"}  </div>
    )
}

export default Basket