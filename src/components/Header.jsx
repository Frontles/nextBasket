import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import ProfileBar from './ProfileBar'

import { wrapper } from '@/store/store'
import { persistStore } from 'redux-persist'
import { useSelector } from 'react-redux'
import { sepet } from '@/store/BasketSlice'
import Basket from './Basket'
import ResetBasket from './resetbasket'




function NavBar(...rest) {



    return (
        <nav className='flex justify-between items-center bg-black p-4 text-white fixed w-full top-0'>
            <Link className='text-3xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-sky-500 to-red-500 ' href='/' >Frontles</Link>
            <ProfileBar />
            <Basket />
            <ResetBasket />
        </nav>
    )
}

export default NavBar