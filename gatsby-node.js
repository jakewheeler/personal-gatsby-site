// const path = require("path")

// module.exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const blogTemplate = path.resolve("./src/templates/blog.js")
//   const response = await graphql(`
//     query {
//       allContentfulBlogPost {
//         edges {
//           node {
//             slug
//           }
//         }
//       }
//     }
//   `)

//   response.data.allContentfulBlogPost.edges.forEach(edge => {
//     createPage({
//       component: blogTemplate,
//       path: `/blog/${edge.node.slug}`,
//       context: {
//         slug: edge.node.slug,
//       },
//     })
//   })
// }

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/blog.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  })
}
