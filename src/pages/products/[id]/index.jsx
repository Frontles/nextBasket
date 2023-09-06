import AddBasketButton from '@/Components/AddBasketButton'
import { product, fetchProduct } from '@/store/ProductsSlice';
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import Layout from '@/pages/layout';
import Image from 'next/image';

function productDetail() {

    const router = useRouter()
    const dispatch = useDispatch();


    useEffect(
        () => {
            dispatch(fetchProduct(router.query.id))
        }, [router.query.id])


    const veri = useSelector(product)


    return (
        <Layout>

            <div className='container flex items-center justify-center h-full mt-20 '>
                <div className='space-y-4 flex flex-col items-center' >
                    <Image className='items-center' src={veri.image} width={300} height={400} objectFit='cover' />
                    <h1 className='text-3xl font-bold '>{veri.title}</h1>
                    <p>{veri.description}</p>
                    <AddBasketButton product={veri} />
                </div>
            </div>
        </Layout>
    )
}

export default productDetail