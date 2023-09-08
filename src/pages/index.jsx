import Link from 'next/link'
import Layout from './layout'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import AddBasketButton from '@/components/AddBasketButton'
import Loading from '@/components/Loading'
export default function Home() {


  const { data, error, isLoading, isFetching, isPreviousData } = useQuery(["products"], async () => {
    const req = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9082319ddf57d1e96b8ccc62174f8db3&language=tr-TR`);

    const res = req.data.results
    return res
  }, {
    keepPreviousData: true
  });




  const truncateOverview = (string, maxLength) => {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)} ...`
  }

  return (

    <Layout>
      {isLoading || isFetching ? <Loading />

        : <div className='container mt-20'>
          <h1 className='text-3xl font-bold'>Ürünler</h1>
          <div className='flex flex-wrap items-start gap-5 justify-center'>


            {
              data?.map((product, index) => (
                <div className="rounded  flex flex-col items-center shadow-lg bg-slate-400  basis-1/4" key={index}>
                  <div className='product-item overflow-hidden aspect-auto'>
                    {<Image className='' src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${product.backdrop_path}`} alt="naber" width={0} height={0} sizes='100vw' />}
                  </div>

                  <div className='  flex flex-wrap flex-col  space-y-4 items-center justify-between px-2 py-4'>
                    <h4>{truncateOverview(product.title, 40)}</h4>
                    <p>{truncateOverview(product.overview, 80)}</p>
                    <p>{product.vote_average} TL </p>
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
