import Link from 'next/link'
import Head from 'next/head'

export default function AllProjects({posts}) {

 return (
  <div className="pd-screen py-4 h-all">
    <Head>
      <title>Alan Akra | My projects</title>
      <meta name="description" content="Alan Akra on the web"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>

   <h1 className="title-projects">My projects</h1>
    <p className="text-lg mb-3">Some selected pieces of projects...</p>
    <ul className="blog-link font-semibold mpme">

    {
      posts.nodes.map(post => {
        
        return(  
          <li className="text-xl mb-6 link-color">
            <Link href={`/projects/${post.slug}`} >
              <a>{post.title}</a>
            </Link>
          </li>
      )
      })
    }
    </ul>
    <p className="text-lg mt-3">...and i also have a <a href="https://codepen.io/alanakra" className="link-color">codepen</a></p>
  </div>
 );

}

export async function getStaticProps(){

 const res = await fetch('http://headless.alanakra.fr/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
   query: `
   query AllPostsQuery {
    posts( last: 5, after: null ) {
      nodes {
        id
        slug
        title
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
  
   `,
  })
 })

  const list = await res.json()
 
  return{
   props: {
    posts: list.data.posts
   }
  }

}
