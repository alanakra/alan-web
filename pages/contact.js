import Title from '../components/Title'
import Navbar from '../components/Navbar'

function contact(props) {
 return (
  <div className="text-center h-full dark:bg-black dark:text-white px-4">
   <Title/>
   <br></br>
   <Navbar/>

   <h1 className="text-5xl mb-4 mt-7">Let's keep in touch</h1>

   <p>You can reach me </p>

   <div className="container-links">
     <div>
      <p>email</p>
      <p>alanakra[at]hotmail[dot]fr</p>
     </div>

     <div>
      <p>GitHub</p>
      <p>alanakra</p>
     </div>

     <div>
      <p></p>
     </div>
   </div>
  </div>
 );
}

export default contact;