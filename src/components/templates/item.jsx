import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Styled, Card, Text, Image } from "theme-ui"
import Layout from "ui/Layout"

const shortcodes = { Link } // Provide common components here

export default function Item({ data: { mdx } }) {
  const data = mdx.frontmatter

  return (
    <Layout>
      <Card>
        <Styled.h1>{data.title}</Styled.h1>
        <div>
          {" "}
          {data.type} | {data.cost} | {data.weight}
        </div>
        <ul>
          <h5>Tags</h5>
          {data.tags.map(tag => (
            <li>{tag}</li>
          ))}
        </ul>
        <Image src={data.image} />
        <Text>{data.description}</Text>

        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </Card>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ItemQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        tags
        cost
        weight
        type
        description
        # image
      }
    }
  }
`
