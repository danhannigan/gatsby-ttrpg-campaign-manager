/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import Header from "ui/Header"
import { jsx, Container, Grid } from "theme-ui"

const LayoutHomepage = ({ children }) => {
  const data = useStaticQuery(graphql`
    query HomeSiteTitleQuery {
      siteData: site {
        siteMetadata {
          title
        }
      }

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
            gameDate
            locations
          }
        }
      }
      party: allMdx(filter: { fields: { slug: { regex: "/characters/" } } }) {
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
  `)

  console.log(data)

  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header siteTitle={data.siteData.siteMetadata.title} />
      <main
        sx={{
          width: "100%",
          flex: "1 1 auto",
          py: ["100px", "100px", 4],
          px: [3, 3, 0],
        }}
      >
        <Container>
          <Grid gap={4} columns={[1, "1fr 300px"]}>
            <main>{children}</main>
            <aside
              sx={{
                listStyle: "none",
                m: 0,
                p: 0,
                paddingLeft: [0, 4],
                borderLeft: ["none", "1px solid #000"],
                minHeight: ["0", "80vh"],
              }}
            >
              <h4 sx={{ pb: 1, mb: 2 }}>GM: Dan</h4>
              <h4 sx={{ pb: 1, mb: 2 }}>System: Dungeons & Dragons 5e</h4>
              <h4 sx={{ pb: 1, mb: 0 }}>Party</h4>
              <ul
                sx={{
                  listStyle: "none",
                  m: 0,
                  p: 0,
                }}
              >
                {data.party &&
                  data.party.nodes.map(character => (
                    <li sx={{ fontSize: 1 }}>
                      <Link
                        to={character.fields.slug}
                        sx={{
                          color: "secondary",
                          fontWeight: "body",
                          textDecoration: "none",
                        }}
                      >
                        {character.frontmatter.title} | Player:{" "}
                        {character.frontmatter.player}
                      </Link>
                    </li>
                  ))}
              </ul>
            </aside>
          </Grid>
        </Container>
      </main>
      <footer
        sx={{
          width: "100%",
        }}
      >
        <Container sx={{ pt: 3, borderTop: "1px solid #000" }}></Container>
      </footer>
    </div>
  )
}

LayoutHomepage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutHomepage
