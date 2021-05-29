import Title from '../components/Title'
import Navbar from '../components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="text-center h-screen dark:bg-black dark:text-white">
      <Title/>
      <br></br>
      <Navbar/>
      <br></br>
      <Image
      className="rounded-full"
      src="https://alanakra.fr/pp.jpg"
      alt="This is me"
      width={150}
      height={150}
      />
      <h1 className="text-xl mb-4">Hey 👋</h1>
      <p className="text-xl">My name is <a href="mailto:bonjour@alanakra.fr">Alan Akra</a> and i'm student in a vocational degree of web development. I'm currently Web developer intern at <a href="https://www.soprabanking.com" target="_blank">SBS</a>. <br/>
      I'm interested about Web technologies such as React ⚛ and creative development 🖼, but also mobile development with <a href="https://developer.apple.com/swift/" target="_blank">Swift 📱</a> who i discovered recently.</p>
    </div>
  )
}
