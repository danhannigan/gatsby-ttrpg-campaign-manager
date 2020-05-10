import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "src/components/ui/layout"
import SEO from "src/components/seo"
import { Heading, Card } from "theme-ui"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <Card>
      <Heading as="h2">Adventure Logs</Heading>
      <ul>
        {data.adventureLogs.nodes.map(log => (
          <li>
            <Link to={log.fields.slug}>{log.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </Card>

    <Card>
      <Heading as="h2">Party</Heading>
      <ul>
        {data.party.nodes.map(log => (
          <li>
            <Link to={log.fields.slug}>{log.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </Card>
  </Layout>
)

export default IndexPage

export const indexQuery = graphql`
  query {
    adventureLogs: allMdx(
      filter: { fields: { slug: { regex: "/adventure-logs/" } } }
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
    party: allMdx(filter: { fields: { slug: { regex: "/party/" } } }) {
      nodes {
        fields {
          slug
        }
        fileAbsolutePath
        frontmatter {
          title
          player
          pronouns
        }
      }
    }
  }
`
