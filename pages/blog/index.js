import Link from 'next/link'

function blog({posts}) {

 return (
  <div>
   <h1 className="font-bold">Hello</h1>
   {
    posts.nodes.map(post => {
     return(
      <ul key={post.slug}>
        <li>
          <Link href={`/temp-blog/${post.slug}`}>{post.title}</Link>
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
     posts {
       nodes {
         slug
         title
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