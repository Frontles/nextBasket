
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { wrapper } from '@/store/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest)
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
