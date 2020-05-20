/** @jsx jsx */
import React from "react"
import { graphql } from "gatsby"
import { jsx } from "theme-ui"
import EntryImage from "ui/EntryImage"
import TagList from "ui/TagList"

export default function NPC({
  frontmatter: { title, name, race, location, pronouns, image, tags },
}) {
  return (
    <div sx={{ display: "flex" }}>
      <EntryImage image={image} />
      <div>
        <h4 sx={{ m: 0, p: 0 }}>{name}</h4>
        <div sx={{ fontSize: 1 }}>
          {" "}
          {race} | {location} | {pronouns}
        </div>
        <TagList tags={tags} />
      </div>
    </div>
  )
}

export const query = graphql`
  fragment NPCFragment on Mdx {
    frontmatter {
      title
      name
      race
      location
      tags
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
