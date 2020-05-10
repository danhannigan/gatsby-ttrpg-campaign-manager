/** @jsx jsx */

import React from "react"
import { graphql } from "gatsby"
import Layout from "src/components/ui/layout"
import { Link } from "gatsby"
import { jsx, Container } from "theme-ui"

export default function DirectoryPage({
  data: {
    allFile: { edges },
  },
  pageContext,
}) {
  const entries = edges
  return (
    <Layout>
      <div
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <aside
          sx={{
            flexGrow: 1,
            flexBasis: "sidebar",
            px: 3,
          }}
        >
          <ul
            sx={{
              m: 0,
              p: 0,
              listStyleType: "none",
            }}
          >
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
        </aside>
        <div
          sx={{
            flexGrow: 99999,
            flexBasis: 0,
            minWidth: 320,
          }}
        >
          <Container variant="content">
            {entries
              .filter(e => e.node.sourceInstanceName.includes(pageContext.name))
              .map(entry => (
                <div>{entry.node.childMdx.frontmatter.title}</div>
              ))}{" "}
          </Container>
        </div>
      </div>
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
