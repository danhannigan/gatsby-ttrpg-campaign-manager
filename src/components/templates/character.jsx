import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { Styled } from "theme-ui"
import Layout from "src/components/ui/layout"
const shortcodes = { Link } // Provide common components here

export default function CharacterSheet({ data: { content, charsheet } }) {
  return (
    <Layout>
      <Styled.h1>{content.frontmatter.title}</Styled.h1>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{content.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export const pageQuery = graphql`
  query CharacterSheetQuery($id: String, $title: String) {
    content: mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
    charsheet: ddbCharSheetsJson(character: { name: { eq: $title } }) {
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
`
