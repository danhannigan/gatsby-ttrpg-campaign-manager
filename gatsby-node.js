const path = require("path")

const { createFilePath } = require("gatsby-source-filesystem")
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const fileNode = getNode(node.parent)

    const value = createFilePath({ node, getNode })
    createNodeField({
      name: "slug",
      node,
      value: `${fileNode.sourceInstanceName}${value}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  const compendiumPageQuery = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  if (compendiumPageQuery.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "compendiumPages" query')
  }
  const compendiumPages = compendiumPageQuery.data.allMdx.edges
  compendiumPages.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(
        `./src/components/layouts/adventure-log-layout.jsx`
      ),
      context: { id: node.id },
    })
  })
}
