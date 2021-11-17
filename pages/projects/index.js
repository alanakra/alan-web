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
    {
      posts.nodes.map(post => {

      return(
        
        <ul key={post.slug} className="mb-6 blog-link font-semibold">
          <li className="text-xl link-color">
            <Link href={`/projects/${post.slug}`} >
              <p>{post.title}</p>
            </Link>
          </li>
        </ul>

      )
      })
    }
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
