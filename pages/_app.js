import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import '../styles/styles.css'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Banner from '../components/Banner'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta name="theme-color" content="#000000"/>
      </Head>
      <Banner/>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
