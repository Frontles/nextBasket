import AddBasketButton from '@/Components/AddBasketButton'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Layout from './layout'
import { products, fetchProducts } from '@/store/ProductsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Image from 'next/image'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts())

  }, [dispatch])

  const veri = useSelector(products)

  const truncateOverview = (string, maxLength) => {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)} ...`
  }

  return (
    <Layout>
      <div className='container mt-20'>
        <h1 className='text-3xl font-bold'>Ürünler</h1>
        <div className='flex flex-wrap items-start justify-start w-full  h-full  '>


          {
            veri.map((product, index) => (
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
    </Layout>
  )
}
