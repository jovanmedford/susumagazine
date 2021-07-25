const pageQuery = `{
  posts: allWpPost {
    nodes {
      id
      slug
      title
      excerpt
    }
  }
}`

function pageToAlgoliaRecord({ id, title, slug, ...rest }) {
  return {
    objectID: id,
    title: title,
    slug: slug,
    ...rest,
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.posts.nodes.map(pageToAlgoliaRecord),
    indexName: "Posts",
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries
