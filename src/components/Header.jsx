import React from 'react'
import Link from 'next/link'
import ProfileBar from './ProfileBar'

import Basket from './Basket'

function NavBar() {
    return (
        <nav className='flex justify-between items-center bg-black p-4 text-white fixed w-full top-0'>
            <Link className='text-3xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-sky-500 to-red-500 ' href='/' >Frontles</Link>
            <ProfileBar />
            <Basket />
        </nav>
    )
}

export default NavBar