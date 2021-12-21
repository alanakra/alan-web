import Link from 'next/link'

export default function Banner(props) {
 return (
  <div className="bg-black text-white sm:text-center p-2 cursor-pointer">
   <p>I’m looking opportunities for a permanent contract in web development. I am also available for <a href="https://www.malt.fr/profile/alanakra" className="link-banner">freelance</a> assignments. My <Link href="/CV.pdf"><a className="link-banner">CV</a></Link> is available here.</p>
  </div>
 );
}
