import Link from 'next/link'
import Head from 'next/head'

function blog({posts}) {

 return (
  <div className="pd-screen py-4 h-all">
    <Head>
      <title>Alan's blog</title>
      <meta name="description" content="My blog on the web" />
    </Head>

   <h1 className="important-title-page">Alan's blog</h1>
   {
    posts.nodes.map(post => {

    const date = new Date(post.date)
    const year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    if (day < 10) {
      day = `0${day}`
    }

    if (month < 10) {
      month = `0${month}`
    }

    const formatDate = `${day}-${month}-${year}`

    return(
      
      <ul key={post.slug} className="mb-6 blog-link font-semibold">
        <p className="text-sm">Published on {formatDate}</p>
        <li className="text-xl link-color">
          <Link href={`/blog/${post.slug}`} >
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

  const json = await res.json()
 
  return{
   props: {
    posts: json.data.posts
   }
  }

}



export default blog