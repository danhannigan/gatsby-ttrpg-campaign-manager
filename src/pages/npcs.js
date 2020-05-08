import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layouts/main-layout"
import SEO from "../components/seo"

const NPCsPage = ({ data }) => (
  <Layout>
    <SEO title="NPCs" />
    <h2>NPCs</h2>
    <ul>
      {data.npcs.nodes.map(log => (
        <li>
          <Link to={log.fields.slug}>{log.frontmatter.title}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default NPCsPage

export const indexQuery = graphql`
  query {
    npcs: allMdx(filter: { fields: { slug: { regex: "/npcs/" } } }) {
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
