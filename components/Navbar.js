import Link from 'next/link'

function Navbar(props) {
 return (
  <div>
   <nav className="flex justify-around w-auto">
    <ul className="flex justify-around">

    <li>
     <Link href="/">
      <a>About Me</a>
     </Link>
     </li>

    <li>
     <Link href="/">
      <a>Projects</a>
     </Link>
     </li>

    <li>
     <Link href="/">
      <a>Contact Me</a>
     </Link>
     </li>

    </ul>
   </nav>
  </div>
 );
}

export default Navbar;