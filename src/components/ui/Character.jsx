/** @jsx jsx */
import React from "react"
import { graphql } from "gatsby"
import EntryImage from "ui/EntryImage"

import { jsx } from "theme-ui"

export default function Character({
  frontmatter: { title, player, pronouns, image },
}) {
  return (
    <div sx={{ display: "flex" }}>
      <EntryImage image={image} />
      <div>
        <h4 sx={{ m: 0, p: 0 }}>{title}</h4>
        <div sx={{ fontSize: 1 }}>{pronouns}</div>
      </div>
    </div>
  )
}

export const query = graphql`
  fragment CharacterFragment on Mdx {
    frontmatter {
      title
      player
      pronouns
      image {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
