import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Styled, Grid, Text, Image, Box } from "theme-ui"
import Layout from "ui/Layout"
import TagList from "ui/TagList"

const shortcodes = { Link } // Provide common components here

export default function Item({ data: { mdx } }) {
  const data = mdx.frontmatter

  return (
    <Layout>
      <Grid gap={4} columns={[1, "300px 1fr"]}>
        <Box
          sx={{
            background: "#efefef",
            border: "1px solid #ddd",
            minHeight: "300px",
          }}
        >
          <Image src={data.image} />
        </Box>
        <Box>
          <Styled.h1>{data.title}</Styled.h1>
          <div>
            {" "}
            {data.type} | {data.cost} | {data.weight}
          </div>
          <TagList tags={data.tags} />
          <Text>{data.description}</Text>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </Box>
      </Grid>
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
        image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
