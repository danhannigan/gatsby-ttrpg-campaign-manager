import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Styled } from "theme-ui"
import Layout from "ui/Layout"
const shortcodes = { Link } // Provide common components here

export default function NPC({ data: { mdx } }) {
  return (
    <Layout>
      <Styled.h1>{mdx.frontmatter.title}</Styled.h1>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export const pageQuery = graphql`
  query NPCQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
