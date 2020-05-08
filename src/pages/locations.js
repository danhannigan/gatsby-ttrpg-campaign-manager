import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layouts/main-layout"
import SEO from "../components/seo"

const LocationsPage = ({ data }) => (
  <Layout>
    <SEO title="Locations" />
    <h2>Locations</h2>
    <ul>
      {data.locations.nodes.map(log => (
        <li>
          <Link to={log.fields.slug}>{log.frontmatter.title}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default LocationsPage

export const indexQuery = graphql`
  query {
    locations: allMdx(filter: { fields: { slug: { regex: "/locations/" } } }) {
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
