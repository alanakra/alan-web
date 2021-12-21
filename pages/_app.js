import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import '../styles/styles.css'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Banner from '../components/Banner'
import { useEffect, useLayoutEffect } from "react";

function MyApp({ Component, pageProps }) {
  
  useLayoutEffect(()=>{
    const isBannerClosed = sessionStorage.getItem('hideBanner')
    console.log(isBannerClosed)
  })
  

  return (
    <>
      <Head>
        <meta name="theme-color" content="#000000"/>
        <script async src="https://kit.fontawesome.com/997660e778.js" crossOrigin="anonymous"></script>
      </Head>
      <Banner warn={'isBannerClosed'}/>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
