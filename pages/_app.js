import Head from 'next/head'

import 'tailwindcss/tailwind.css'
import '@/styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MA Muhammadiyah 3 Jetis Ponorogo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
