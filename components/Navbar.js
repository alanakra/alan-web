import Link from 'next/link'

export default function Navbar (props) {
 return (
  <div className="pd-screen flex justify-between my-4 font-semibold">
   <Link href="/">
    <a className="nav-name">alanakra.fr</a>
   </Link>

   <div className="list-links flex justify-between w-50 sm:w-25">
    <Link href="/projects">
     <a>Projects</a>
    </Link>
     <a href="https://github.com/alanakra">GitHub</a>
     <a href="https://myblog-coral.vercel.app/">Blog</a>
   </div>
  </div>
 );
}
