/** @jsx jsx */

// eslint-disable-next-line no-unused-vars
import React from "react"
import { graphql } from "gatsby"
import Layout from "ui/Layout"
import Sidebar from "ui/Sidebar"
import ToC from "ui/ToC"
import { Link } from "gatsby"
import { jsx, Box, Grid } from "theme-ui"

import AdventureLog from "ui/AdventureLog"
import Character from "ui/Character"
import Item from "ui/Item"
import Location from "ui/Location"
import NPC from "ui/NPC"

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
          excerpt(pruneLength: 500)
          ...AdventureLogFragment
          ...CharacterFragment
          ...ItemFragment
          ...LocationFragment
          ...NPCFragment
        }
      }
    }
    allDdbCharSheetsJson {
      edges {
        node {
          id
          character {
            name
            classes {
              level
              definition {
                name
              }
              subclassDefinition {
                name
              }
            }
            race {
              baseName
            }
          }
        }
      }
    }
  }
`
