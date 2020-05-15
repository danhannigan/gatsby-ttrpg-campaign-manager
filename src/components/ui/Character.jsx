import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function Character({
  frontmatter: { title, player, pronouns, image },
}) {
  return (
    <div>
      <h4>{title}</h4>
      <div>Player: {player}</div>
      {image !== null ? (
        <Img
          fluid={image.childImageSharp.fluid}
          sx={{
            width: ["50px", "50px", "75px"],
            height: ["50px", "50px", "75px"],
            mr: 3,
          }}
        />
      ) : (
        <div
          sx={{
            width: ["50px", "50px", "75px"],
            height: ["50px", "50px", "75px"],
            mr: 3,
            background: "#efefef",
            border: "1px solid #ddd",
          }}
        ></div>
      )}
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
