import Head from 'next/Head'
import Link from 'next/link'

function Title(props) {
 return (
  <div>
   <Head>
    <title>Alan Akra</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
   </Head>
   
   <Link href="/">
    <a>
     <h1 className="text-center text-4xl">Alan Akra</h1>
     <p className="text-center text-2xl">Web developer</p>
    </a>
   </Link>
  </div>
 );
}

export default Title;