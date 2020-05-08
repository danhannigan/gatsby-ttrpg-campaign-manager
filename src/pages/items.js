import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layouts/main-layout"
import SEO from "../components/seo"

const ItemsPage = ({ data }) => (
  <Layout>
    <SEO title="Items" />
    <h2>Items</h2>
    <ul>
      {data.items.nodes.map(log => (
        <li>
          <Link to={log.fields.slug}>{log.frontmatter.title}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default ItemsPage

export const indexQuery = graphql`
  query {
    items: allMdx(filter: { fields: { slug: { regex: "/items/" } } }) {
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
