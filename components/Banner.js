import Link from 'next/link'

export default function Banner(props) {
 console.log(props)

 const hideBanner = () => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('hideBanner', true)
  }
 }

 if (props.warn == 'true') {    
  return null;
 }
 
 return (
  <div className="bg-black text-white sm:text-center p-2 flex justify-between cursor-pointer">
   <div></div>
   <p>I’m looking opportunities for a permanent contract in web development. I am also available for <a href="https://www.malt.fr/profile/alanakra" className="link-color">freelance</a> assignments. My <Link href="/CV.pdf"><a className="link-color">CV</a></Link> is available here.</p>

   <i className="fas fa-times" onClick={hideBanner}></i>
  </div>
 );
}
