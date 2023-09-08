
import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import AddBasketButton from '@/components/AddBasketButton'
import Layout from '@/pages/layout';
import Loading from '@/components/Loading';

function ProductDetail() {

    const router = useRouter()
    const id = router.query.id

    /*
  useQuery([“products],id) ekler misin birde axios.get(`url/products/${id}`), {
         enabled: !!id yapar mısın
    */

    const { data, error, isLoading, isFetching } = useQuery(["product", id], async () => await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=9082319ddf57d1e96b8ccc62174f8db3`), { enabled: !!id });



    return (
        <Layout>
            {
                isLoading || isFetching ? <Loading />
                    : <div className='container flex items-center justify-center  '>
                        <div className='space-y-4 product-item  flex flex-col items-center aspect-video' >

                            <Image className='' src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${data?.data?.backdrop_path}`} width={0} height={0} objectFit='cover' sizes='100vw' alt='img' />

                            <h1 className='text-3xl font-bold '>{data?.data?.title}</h1>
                            <p>{data?.data?.overview}</p>
                            <p>{data?.data?.vote_average} TL</p>
                            <AddBasketButton product={data.data} />
                        </div>
                    </div>
            }
        </Layout>
    )
}

export default ProductDetail