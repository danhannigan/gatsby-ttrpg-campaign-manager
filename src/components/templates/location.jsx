import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "ui/Layout"
import { Link } from "gatsby"
import { Styled } from "theme-ui"
const shortcodes = { Link } // Provide common components here

export default function Location({ data: { mdx } }) {
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
  query LocationQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
