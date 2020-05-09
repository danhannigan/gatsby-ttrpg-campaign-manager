import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layouts/main-layout"
import SEO from "../components/seo"

const PartyPage = ({ data }) => (
  <Layout>
    <SEO title="party" />
    <h2>Party</h2>
    <ul>
      {data.party.nodes.map(log => (
        <li>
          <Link to={log.fields.slug}>{log.frontmatter.title}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default PartyPage

export const indexQuery = graphql`
  query {
    party: allMdx(filter: { fields: { slug: { regex: "/party/" } } }) {
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
