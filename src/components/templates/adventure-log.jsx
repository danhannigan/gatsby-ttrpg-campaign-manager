/** @jsx jsx */

import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { Styled, Grid, Box, jsx } from "theme-ui"
import Layout from "ui/Layout"
import Sidebar from "ui/Sidebar"
import ToC from "ui/ToC"
const shortcodes = { Link } // Provide common components here

export default function AdventureLog({ data: { mdx } }) {
  return (
    <Layout>
      <Grid gap={4} columns={[1, "300px 1fr"]}>
        <Sidebar>
          {mdx.tableOfContents.items && (
            <ToC items={mdx.tableOfContents.items} />
          )}
        </Sidebar>
        <Box>
          <Styled.h1>{mdx.frontmatter.title}</Styled.h1>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </Box>
      </Grid>
    </Layout>
  )
}

export const pageQuery = graphql`
  query AdventureLogQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      tableOfContents
      frontmatter {
        title
        date
        locations
        gameDate
      }
    }
  }
`
