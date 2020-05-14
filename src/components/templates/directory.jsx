/** @jsx jsx */

import React from "react"
import { graphql } from "gatsby"
import Layout from "src/components/ui/layout"
import Sidebar from "src/components/ui/sidebar"
import ToC from "src/components/ui/TableOfContents"
import { Link } from "gatsby"
import { jsx, Box, Grid, Styled } from "theme-ui"

export default function DirectoryPage({
  data: {
    allFile: { edges },
  },
  pageContext,
}) {
  const entries = edges
  return (
    <Layout>
      <Grid gap={4} columns={[1, "300px 1fr"]}>
        <Sidebar>
          <ul
            sx={{
              listStyle: "none",
              m: 0,
              p: 0,
            }}
          >
            {entries
              .filter(e => e.node.sourceInstanceName.includes(pageContext.name))
              .map(entry => (
                <li sx={{ mb: 2 }}>
                  <Link
                    to={entry.node.childMdx.fields.slug}
                    sx={{
                      color: "secondary",
                      fontWeight: "body",
                      textDecoration: "none",
                    }}
                  >
                    {entry.node.childMdx.frontmatter.title}
                  </Link>
                </li>
              ))}{" "}
          </ul>
        </Sidebar>
        <Box variant="content">
          <ul
            sx={{
              listStyle: "none",
              m: 0,
              p: 0,
            }}
          >
            {entries
              .filter(e => e.node.sourceInstanceName.includes(pageContext.name))
              .map(entry => (
                <li
                  key={entry.node.id}
                  sx={{
                    mb: 4,
                  }}
                >
                  <Styled.h2
                    sx={{
                      m: 0,
                    }}
                  >
                    <Link
                      to={entry.node.childMdx.fields.slug}
                      sx={{
                        color: "inherit",
                        textDecoration: "none",
                        ":hover,:focus": {
                          color: "primary",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      {entry.node.childMdx.frontmatter.title}
                    </Link>
                  </Styled.h2>
                  {entry.node.sourceInstanceName === "adventure-logs" && (
                    <Styled.p>{entry.node.childMdx.excerpt}</Styled.p>
                  )}
                </li>
              ))}
          </ul>
        </Box>
      </Grid>
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
