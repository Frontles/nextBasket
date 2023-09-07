
import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import AddBasketButton from '@/components/AddBasketButton'
import Layout from '@/pages/layout';

function ProductDetail() {

    const router = useRouter()
    const id = router.query.id

    /*
  useQuery([“products],id) ekler misin birde axios.get(`url/products/${id}`), {
         enabled: !!id yapar mısın
    */

    const { data, error, isLoading, isFetching } = useQuery(["product", id], () => axios.get(`https://fakestoreapi.com/products/${id}`), { enabled: !!id });



    return (
        <Layout>
            {
                isLoading || isFetching ? <div className='absolute text-white duration-700 bg-black opacity-40 w-full h-full flex items-center justify-center'> Yükleniyor... </div>
                    : <div className='container flex items-center justify-center h-full mt-20 '>
                        <div className='space-y-4 flex flex-col items-center' >
                            <Image className='items-center' src={data?.data?.image} width={300} height={400} objectFit='cover' alt='img' />
                            <h1 className='text-3xl font-bold '>{data?.data?.title}</h1>
                            <p>{data?.data?.description}</p>
                            <p>{data?.data?.price} TL</p>
                            <AddBasketButton product={data.data} />
                        </div>
                    </div>
            }
        </Layout>
    )
}

export default ProductDetail