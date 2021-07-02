import Head from 'next/head'

export default function Post( data ){

    const post = data.post
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

    return (
        <div className="pd-screen py-4 h-all">
            <Head>
                <title>Alan's blog | {post.title}</title>
            </Head>
            <h1 className="important-title-page">{post.title}</h1>
            <p className="text-sm font-semibold mb-4">Published on {formatDate}</p>
            
            <div dangerouslySetInnerHTML={{__html: post.content}} className="text-xl"></div>
        </div>
    )

}

export async function getStaticProps(context) {

    const res = await fetch('http://headless.alanakra.fr/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                query SinglePost($id: ID!, $idType: PostIdType!) {
                    post(id: $id, idType: $idType) {
                        title
                        slug
                        content
                        date
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                    }
                }
            `,
            variables: {
                id: context.params.slug,
                idType: 'SLUG'
            }
        })
    })

    const json = await res.json()

    return {
        props: {
            post: json.data.post,
        },
    }

}

export async function getStaticPaths() {

    const res = await fetch('http://headless.alanakra.fr/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query AllPostsQuery {
                posts {
                    nodes {
                        slug
                        content
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
        `})
    })

    const json = await res.json()
    const posts = json.data.posts.nodes;

    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }))

    return { paths, fallback: false }

}
