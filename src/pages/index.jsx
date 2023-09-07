import Link from 'next/link'
import Layout from './layout'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import AddBasketButton from '@/components/AddBasketButton'
export default function Home() {



  const { data, error, isLoading, isFetching } = useQuery(["products"], async () => {
    const req = await axios.get(`https://fakestoreapi.com/products/`)
    const res = req.data
    return res
  });




  const truncateOverview = (string, maxLength) => {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)} ...`
  }

  return (

    <Layout>
      {isLoading || isFetching ? <div className='absolute text-white duration-700 bg-black opacity-40 w-full h-full flex items-center justify-center'> Yükleniyor... </div>

        : <div className='container mt-20'>
          <h1 className='text-3xl font-bold'>Ürünler</h1>
          <div className='flex flex-wrap items-start justify-start w-full  h-full  '>


            {
              data?.map((product, index) => (
                <div className="max-w-md rounded overflow-hidden flex flex-col items-center shadow-lg m-auto bg-slate-400 my-4" key={index}>
                  {<Image className='items-center w-60 h-full' src={product.image} alt="naber" width={200} height={200} />}
                  <div className='  flex flex-wrap flex-col items-center justify-between px-2 py-4'>
                    <h4>{truncateOverview(product.title, 50)}</h4>
                    <p>{product.price} TL </p>
                    <div className='flex items-center justify-center space-x-4 ' >
                      <AddBasketButton product={product} />
                      <Link className='border bg-green-500 p-4  text-sm flex items-center' href={`/products/${product.id}`}>İncele</Link>
                    </div>
                  </div>
                </div>
              ))
            }



          </div>
        </div>
      }
    </Layout>
  )
}
