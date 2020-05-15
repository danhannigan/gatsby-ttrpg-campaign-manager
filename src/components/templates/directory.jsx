/** @jsx jsx */

import React from "react"
import { graphql } from "gatsby"
import Layout from "src/components/ui/layout"
import Sidebar from "src/components/ui/Sidebar"
import ToC from "src/components/ui/TableOfContents"
import { Link } from "gatsby"
import { jsx, Box, Grid, Styled, Image } from "theme-ui"
import Img from "gatsby-image"

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
                <li sx={{ mb: 2 }} key={entry.node.id}>
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
                  <Link
                    to={entry.node.childMdx.fields.slug}
                    sx={{
                      color: "inherit",
                      textDecoration: "none",
                      ":hover,:focus": {
                        color: "primary",
                        textDecoration: "underline",
                      },
                      display: "flex",
                      flexWrap: "wrap",
                      border: "1px solid #efefef",
                      padding: 3,
                    }}
                  >
                    {(entry.node.sourceInstanceName === "characters" ||
                      entry.node.sourceInstanceName === "items" ||
                      entry.node.sourceInstanceName === "npcs") && (
                      <>
                        {entry.node.childMdx.frontmatter.image !== null ? (
                          <Img
                            fluid={
                              entry.node.childMdx.frontmatter.image
                                .childImageSharp.fluid
                            }
                            sx={{
                              width: ["50px", "50px", "75px"],
                              height: ["50px", "50px", "75px"],
                              mr: 3,
                            }}
                          />
                        ) : (
                          <div
                            sx={{
                              width: ["50px", "50px", "75px"],
                              height: ["50px", "50px", "75px"],
                              mr: 3,
                              background: "#efefef",
                              border: "1px solid #ddd",
                            }}
                          ></div>
                        )}{" "}
                      </>
                    )}
                    <div>
                      <Styled.h3
                        sx={{
                          m: 0,
                          p: 0,
                        }}
                      >
                        {entry.node.childMdx.frontmatter.title}
                      </Styled.h3>
                      {entry.node.sourceInstanceName === "adventure-logs" && (
                        <Styled.p>{entry.node.childMdx.excerpt}</Styled.p>
                      )}
                      {entry.node.sourceInstanceName === "characters" && (
                        <div>
                          Player: {entry.node.childMdx.frontmatter.player}
                        </div>
                      )}
                    </div>
                  </Link>
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
              player
              pronouns
              image {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
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
