import Link from 'next/link'

function Navbar(props) {
 return (
  <div>
   <nav>
    <ul className="flex justify-around">

    <li>
     <Link href="/about">
      <a>About Me</a>
     </Link>
     </li>

    <li>
     <Link href="/">
      <a>Projects</a>
     </Link>
     </li>

    <li>
     <Link href="/contact">
      <a>Contact Me</a>
     </Link>
     </li>

    </ul>
   </nav>
  </div>
 );
}

export default Navbar;