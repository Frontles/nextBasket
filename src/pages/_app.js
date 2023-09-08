
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { wrapper } from '@/store/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import Loading from '@/components/Loading'





export default function App({ Component, ...rest }) {

  const { store, props } = wrapper.useWrappedStore(rest)
  const persistor = persistStore(store)
  const { pageProps } = props
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      }
    },
  })


  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>

  )
}
{/*} <PersistGate loading={<Loading />} persistor={persistor}> burası veriler yüklenirken gecikmeyi sağlıyor ancak herhangi bir sayfanın içindeyken f5 atınca yüklenmiyor uzunca süre.
          <Component {...pageProps} />

        </PersistGate>
  {*/}