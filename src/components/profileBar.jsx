import React from 'react'
import { useSelector } from 'react-redux'
import { user } from '@/store/UserSlice'

function ProfileBar() {

    const data = useSelector(user)

    return (
        <div>Hoşgeldiniz : <span className='font-bold text-xl'>{data.name}</span></div>
    )
}

export default ProfileBar