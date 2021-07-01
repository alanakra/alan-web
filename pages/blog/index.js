import Link from 'next/link'
import Head from 'next/head'

function blog({posts}) {

 return (
  <div className="pd-screen py-4 h-all">
    <Head>
      <title>Alan Akra | Blog</title>
    </Head>

   <h1 className="important-title-page">Blog</h1>
   {
    posts.nodes.map(post => {
     return(
      <ul key={post.slug}>
        <li className="text-xl">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
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

  const json = await res.json()
 
  return{
   props: {
    posts: json.data.posts
   }
  }

}



export default blog