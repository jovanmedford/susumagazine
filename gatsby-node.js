exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allWpPost(filter: { section: { name: { ne: "company" } } }) {
        nodes {
          id
          uri
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.error("There was an error fetching posts", result.errors)
  }

  const { allWpPost } = result.data

  const institutionResult = await graphql(`
    {
      allWpUser(filter: { custom: { isinstitution: { eq: true } } }) {
        edges {
          node {
            id
            firstName
          }
        }
      }
    }
  `)

  if (institutionResult.errors) {
    reporter.error(
      "There was an error fetching posts",
      institutionResult.errors
    )
  }

  const institutions = institutionResult.data.allWpUser.edges

  // Define the template to use
  const template = require.resolve(`./src/templates/BlogPostTemplate.js`)
  const institutionTemplate = require.resolve(
    `./src/templates/InstitutionTemplate.js`
  )

  if (institutions.length) {
    institutions.map(institution => {
      actions.createPage({
        path: `institutions/${institution.node.firstName
          .replace(/\s+/g, "-")
          .toLowerCase()}`,
        component: institutionTemplate,
        context: institution.node,
      })
    })
  }

  if (allWpPost.nodes.length) {
    allWpPost.nodes.map(post => {
      actions.createPage({
        path: post.slug,
        component: template,
        context: post,
      })
    })
  }
}
