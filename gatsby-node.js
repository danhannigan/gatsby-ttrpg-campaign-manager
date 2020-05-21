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
    createNodeField({
      name: "collection",
      node,
      value: fileNode.sourceInstanceName,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const pageQuery = await graphql(`
    query {
      directories: allDirectory(
        filter: {
          base: { ne: "images" }
          sourceInstanceName: { ne: "images" }
          relativeDirectory: { eq: ".." }
        }
      ) {
        edges {
          node {
            name
          }
        }
      }
      compendiumEntries: allMdx {
        edges {
          node {
            id
            fields {
              slug
              collection
            }
          }
        }
      }
    }
  `)
  if (pageQuery.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "pageQuery" query')
  }
  const compendiumDirectories = pageQuery.data.directories.edges
  compendiumDirectories.forEach(({ node }, index) => {
    createPage({
      path: node.name,
      component: path.resolve(`src/components/templates/directory.jsx`),
      context: { ...node, id: node.id },
    })
  })

  const compendiumEntries = pageQuery.data.compendiumEntries.edges
  compendiumEntries.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      // TODO: Find a better way to handle this. It's pretty brittle.
      component: path.resolve(
        `src/components/templates/${node.fields.collection.substring(
          0,
          node.fields.collection.length - 1
        )}.jsx`
      ),
      context: {
        slug: node.fields.slug,
        id: node.id,
        collection: node.fields.collection,
      },
    })
  })
}

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    "type Mdx implements Node { frontmatter: Frontmatter }",
    schema.buildObjectType({
      name: "Frontmatter",
      fields: {
        ddbId: {
          type: "DdbCharSheetsJson",
          resolve: (source, args, context, info) => {
            return context.nodeModel
              .getAllNodes({ type: "DdbCharSheetsJson" })
              .find(character => {
                return character.id === source.ddbId
              })
          },
        },
      },
    }),
  ]
  createTypes(typeDefs)
}
