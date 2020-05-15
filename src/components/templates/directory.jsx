/** @jsx jsx */

// eslint-disable-next-line no-unused-vars
import React from "react"
import { graphql } from "gatsby"
import Layout from "src/components/ui/Layout"
import Sidebar from "src/components/ui/Sidebar"
import ToC from "src/components/ui/ToC"
import { Link } from "gatsby"
import { jsx, Box, Grid } from "theme-ui"

import AdventureLog from "src/components/ui/AdventureLog"
import Character from "src/components/ui/Character"
import Item from "src/components/ui/Item"
import Location from "src/components/ui/Location"
import NPC from "src/components/ui/NPC"

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
    case "npcs":
      return <NPC frontmatter={node.frontmatter} />
    default:
      return <div></div>
  }
}

export default function DirectoryPage({ data, pageContext }) {
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
          ></ul>
        </Sidebar>
        <Box variant="content">
          <ul
            sx={{
              listStyle: "none",
              m: 0,
              p: 0,
            }}
          >
            {data.allMdx.edges
              .filter(e => e.node.fields.collection.includes(pageContext.name))
              .map(({ node }) => (
                <li key={node.id} sx={{ mb: 4 }}>
                  <Link
                    to={`/${node.fields.slug}/`}
                    sx={{
                      color: "inherit",
                      textDecoration: "none",
                      ":hover,:focus": {
                        color: "primary",
                        textDecoration: "underline",
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
          </ul>
        </Box>
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query DirectoryEntries {
    allMdx {
      totalCount
      edges {
        node {
          id
          fields {
            slug
            collection
          }
          excerpt
          ...AdventureLogFragment
          ...CharacterFragment
          ...ItemFragment
          ...LocationFragment
          ...NPCFragment
        }
      }
    }
  }
`
