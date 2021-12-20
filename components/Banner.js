import { useEffect } from 'react';
import Link from 'next/link'

export default function Banner(props) {

 const hideBanner = () => {
  useEffect(()=>{
    sessionStorage.setItem('hideBanner', true)
  },[])
 }
 
 return (
  <div className="bg-black text-white sm:text-center p-2 flex justify-between">
   <div></div>
   <p>I’m looking opportunities for a permanent contract in web development. I am also available for <a href="https://www.malt.fr/profile/alanakra" className="link-color">freelance</a> assignments. My <Link href="/CV.pdf"><a className="link-color">CV</a></Link> is available here.</p>

   <i class="fas fa-times" onClick={hideBanner}></i>
  </div>
 );
}
