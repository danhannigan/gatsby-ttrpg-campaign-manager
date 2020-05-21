/** @jsx jsx */
import React from "react"
import { graphql } from "gatsby"
import EntryImage from "ui/EntryImage"
import { jsx } from "theme-ui"

export default function Character({
  frontmatter: { title, player, pronouns, image, ddbId },
}) {
  return (
    <div sx={{ display: "flex" }}>
      <EntryImage image={image} />
      <div>
        <h3 sx={{ m: 0, p: 0 }}>{title}</h3>
        {ddbId !== null && (
          <>
            <div
              sx={{
                fontSize: 1,
                display: "flex",
                flexDirection: ["column", "column", "row"],
              }}
            >
              {ddbId.race.baseName}&nbsp;|&nbsp;
              {ddbId.classes.map(ddbClass => (
                <div>
                  Lvl {ddbClass.level} {ddbClass.definition.name}
                  {ddbClass.subclassDefinition && (
                    <span>&nbsp;/ {ddbClass.subclassDefinition.name}</span>
                  )}
                  &nbsp;|&nbsp;
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export const query = graphql`
  fragment CharacterFragment on Mdx {
    frontmatter {
      title
      name
      race
      location
      tags
      pronouns
      player
      image {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ddbId {
        name
        race {
          baseName
        }
        classes {
          definition {
            name
          }
          subclassDefinition {
            name
          }
          level
        }
      }
    }
  }
`
