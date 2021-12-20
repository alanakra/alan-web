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
        <script async src="https://kit.fontawesome.com/997660e778.js" crossOrigin="anonymous"></script>
      </Head>
      <Banner/>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
