import React from "react"
import { graphql } from "gatsby"
import Layout from "src/components/ui/layout"
import { Link } from "gatsby"

export default function DirectoryPage({
  data: {
    allFile: { edges },
  },
  pageContext,
}) {
  const entries = edges
  return (
    <Layout>
      <ul>
        {entries
          .filter(e => e.node.sourceInstanceName.includes(pageContext.name))
          .map(entry => (
            <li>
              <Link to={entry.node.childMdx.fields.slug}>
                {entry.node.childMdx.frontmatter.title}
              </Link>
            </li>
          ))}{" "}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query DirectoryEntries {
    allFile(filter: { internal: { mediaType: { eq: "text/mdx" } } }) {
      edges {
        node {
          id
          childMdx {
            fields {
              slug
            }
            excerpt
            frontmatter {
              title
            }
          }
          internal {
            content
            mediaType
          }
          sourceInstanceName
        }
      }
    }
  }
`
