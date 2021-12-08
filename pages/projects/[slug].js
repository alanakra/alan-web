import Head from 'next/head'

export default function Post( data ){

    const post = data.post

    return (
        <div className="pd-screen py-4 h-all">
            <Head>
                <title>Alan Akra's project | {post.title}</title>
            </Head>
            <h1 className="title-projects">{post.title}</h1>
            
            <div dangerouslySetInnerHTML={{__html: post.content}} className="text-xl headless-style"></div>
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
