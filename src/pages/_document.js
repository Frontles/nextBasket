import Header from '@/Components/Header'
import { store } from '@/store/store'
import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {

  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
