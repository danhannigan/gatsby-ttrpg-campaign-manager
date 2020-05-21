/** @jsx jsx */

// eslint-disable-next-line no-unused-vars
import React from "react"
import { graphql, Link } from "gatsby"
import { jsx, Box, Grid } from "theme-ui"
import Layout from "ui/Layout"
import Sidebar from "ui/Sidebar"
import ToC from "ui/ToC"

import AdventureLog from "ui/AdventureLog"
import Character from "ui/Character"
import Item from "ui/Item"
import Location from "ui/Location"

const renderNodeType = node => {
  switch (node.fields.collection) {
    case "adventure-logs":
      return (
        <AdventureLog frontmatter={node.frontmatter} excerpt={node.excerpt} />
      )
    case "characters":
      return <Character frontmatter={node.frontmatter} />
    case "items":
      return <Item frontmatter={node.frontmatter} />
    case "locations":
      return <Location frontmatter={node.frontmatter} />
    default:
      return <div></div>
  }
}

export default function DirectoryPage({ data, pageContext }) {
  const currentPageMdx = data.allMdx.edges.filter(e =>
    e.node.fields.collection.includes(pageContext.name)
  )
  const playerMdx = currentPageMdx.filter(
    e => e.node.frontmatter.player !== null
  )
  const npcMdx = currentPageMdx.filter(e => e.node.frontmatter.player === null)

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
            {pageContext.name === "characters" ? (
              <>
                <h3 sx={{ m: 0, mb: 2, borderBottom: "1px solid #efefef" }}>
                  Players
                </h3>
                {playerMdx.map(({ node }) => (
                  <li sx={{ mb: 1, pl: 1, fontSize: 1 }}>
                    <Link
                      to={`/${node.fields.slug}/`}
                      variant="sidebar"
                      sx={{ color: "secondary", textDecoration: "none" }}
                    >
                      {node.frontmatter.title}
                    </Link>
                  </li>
                ))}
                <h3 sx={{ mt: 3, mb: 2, borderBottom: "1px solid #efefef" }}>
                  NPCs
                </h3>
                {npcMdx.map(({ node }) => (
                  <li sx={{ mb: 1, pl: 1, fontSize: 1 }}>
                    <Link
                      to={`/${node.fields.slug}/`}
                      variant="sidebar"
                      sx={{ color: "secondary", textDecoration: "none" }}
                    >
                      {node.frontmatter.title}
                    </Link>
                  </li>
                ))}
              </>
            ) : (
              <>
                <h3 sx={{ m: 0, mb: 2, borderBottom: "1px solid #efefef" }}>
                  Entries
                </h3>
                {currentPageMdx.map(({ node }) => (
                  <li sx={{ mb: 1, pl: 1, fontSize: 1 }}>
                    <Link
                      to={`/${node.fields.slug}/`}
                      variant="sidebar"
                      sx={{ color: "secondary", textDecoration: "none" }}
                    >
                      {node.frontmatter.title}
                    </Link>
                  </li>
                ))}
              </>
            )}
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
            {pageContext.name === "characters" ? (
              <>
                <h3>Player Characters</h3>
                <>
                  {playerMdx.map(({ node }) => (
                    <li key={node.id} sx={{ mb: 4 }}>
                      <Link
                        to={`/${node.fields.slug}/`}
                        sx={{
                          color: "inherit",
                          textDecoration: "none",
                          ":hover,:focus": {
                            color: "text",
                            textDecoration: "none",
                          },
                          display: "flex",
                          flexWrap: "wrap",
                          padding: 3,
                          border: "1px solid #ddd",
                        }}
                      >
                        {renderNodeType(node)}
                      </Link>
                    </li>
                  ))}
                </>
                <h3>NPCs</h3>
                {npcMdx.map(({ node }) => (
                  <li key={node.id} sx={{ mb: 4 }}>
                    <Link
                      to={`/${node.fields.slug}/`}
                      sx={{
                        color: "inherit",
                        textDecoration: "none",
                        ":hover,:focus": {
                          color: "text",
                          textDecoration: "none",
                        },
                        display: "flex",
                        flexWrap: "wrap",
                        padding: 3,
                        border: "1px solid #ddd",
                      }}
                    >
                      {renderNodeType(node)}
                    </Link>
                  </li>
                ))}
              </>
            ) : (
              <>
                {currentPageMdx.map(({ node }) => (
                  <li key={node.id} sx={{ mb: 4 }}>
                    <Link
                      to={`/${node.fields.slug}/`}
                      sx={{
                        color: "inherit",
                        textDecoration: "none",
                        ":hover,:focus": {
                          color: "text",
                          textDecoration: "none",
                        },
                        display: "flex",
                        flexWrap: "wrap",
                        padding: 3,
                        border: "1px solid #ddd",
                      }}
                    >
                      {renderNodeType(node)}
                    </Link>
                  </li>
                ))}
              </>
            )}
          </ul>
        </Box>
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query DirectoryEntries {
    allMdx(
      sort: {
        order: [DESC, ASC]
        fields: [frontmatter___date, frontmatter___title]
      }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
            collection
          }
          excerpt(pruneLength: 500)
          ...AdventureLogFragment
          ...CharacterFragment
          ...ItemFragment
          ...LocationFragment
        }
      }
    }
  }
`
