import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layouts/main-layout"
import SEO from "../components/seo"
import { Heading } from "theme-ui"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <Heading as="h2">Adventure Logs</Heading>
    <ul>
      {data.adventureLogs.nodes.map(log => (
        <li>
          <Link to={log.fields.slug}>{log.frontmatter.title}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const indexQuery = graphql`
  query {
    adventureLogs: allMdx(
      filter: { fields: { slug: { regex: "/adventure-log/" } } }
    ) {
      nodes {
        fields {
          slug
        }
        fileAbsolutePath
        frontmatter {
          title
          in_game_date
          locations
        }
      }
    }
  }
`
