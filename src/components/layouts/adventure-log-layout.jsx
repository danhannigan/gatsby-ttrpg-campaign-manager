/** @jsx jsx */

import React from "react"
import Layout from "./main-layout"
import SEO from "../../components/seo"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { jsx, Styled } from "theme-ui"
const shortcodes = { Link } // Provide common components here

export default function AdventurePageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <SEO title="Adventure Logs" />
      <div
        sx={{
          display: "grid",
          gridGap: 4,
          gridTemplateColumns: ["auto", "256px 1fr"],
        }}
      >
        <aside></aside>
        <section
          sx={{
            maxWidth: "content",
            padding: [3, 0, 0],
          }}
        >
          <Styled.h1>{mdx.frontmatter.title}</Styled.h1>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </section>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query AdventureLogQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
