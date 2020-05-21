import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { Styled, Grid, Box } from "theme-ui"
import Layout from "ui/Layout"
const shortcodes = { Link } // Provide common components here

export default function CharacterSheet({ data: { content } }) {
  const charSheet = content.frontmatter.ddbId

  return (
    <Layout>
      <Grid gap={4} columns={[1, "300px 1fr"]}>
        <Box
          sx={{
            background: "#efefef",
            border: "1px solid #ddd",
            minHeight: "300px",
          }}
        ></Box>
        <Box>
          <Styled.h1>{content.frontmatter.title}</Styled.h1>
          {content.frontmatter.ddbId !== null && (
            <>
              {charSheet.race.baseName}
              {charSheet.classes.map(charClass => (
                <div>
                  Lvl {charClass.level} {charClass.definition.name}
                  {charClass.subclassDefinition && (
                    <span>&nbsp;/ {charClass.subclassDefinition.name}</span>
                  )}
                  &nbsp;|&nbsp;
                </div>
              ))}
            </>
          )}
        </Box>
      </Grid>
    </Layout>
  )
}

export const pageQuery = graphql`
  query CharacterSheetQuery($id: String) {
    content: mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        ddbId {
          name
          race {
            baseName
          }
          classes {
            definition {
              name
              hitDice
            }
            subclassDefinition {
              name
            }
            level
            hitDiceUsed
          }
          currencies {
            cp
            ep
            gp
            pp
            sp
          }
          eyes
          faith
          hair
          gender
          height
          skin
          weight
          stats {
            id
            value
          }
          traits {
            appearance
            bonds
            flaws
            ideals
            personalityTraits
          }
          inventory {
            definition {
              name
              tags
            }
            quantity
          }
          feats {
            definition {
              name
            }
          }
          age
          actions {
            class {
              name
            }
            feat {
              name
            }
            race {
              name
            }
          }
          background {
            definition {
              name
            }
          }
          spells {
            class {
              definition {
                name
              }
            }
            item {
              definition {
                name
              }
            }
            race {
              definition {
                name
              }
            }
          }
          modifiers {
            background {
              friendlySubtypeName
              friendlyTypeName
            }
            race {
              value
              friendlySubtypeName
              friendlyTypeName
            }
            item {
              value
              friendlySubtypeName
              friendlyTypeName
            }
            class {
              friendlySubtypeName
              value
              friendlyTypeName
            }
          }
        }
      }
    }
  }
`
