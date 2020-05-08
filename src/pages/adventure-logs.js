import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layouts/main-layout"
import SEO from "../components/seo"

const AdventureLogsPage = ({ data }) => (
  <Layout>
    <SEO title="Adventure Logs" />
    <h2>Adventure Logs</h2>
    <ul>
      {data.adventureLogs.nodes.map(log => (
        <li>
          <Link to={log.fields.slug}>{log.frontmatter.title}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default AdventureLogsPage

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
        }
      }
    }
  }
`
