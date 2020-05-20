/** @jsx jsx */

import React from "react"
import { graphql } from "gatsby"
import { jsx } from "theme-ui"
import EntryImage from "ui/EntryImage"
import TagList from "ui/TagList"

export default function Item({
  frontmatter: { title, tags, cost, weight, type, description, image },
}) {
  return (
    <div sx={{ display: "flex" }}>
      <EntryImage image={image} />
      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <h4 sx={{ margin: 0, padding: 0 }}>{title}</h4>
        <div sx={{ fontSize: 1 }}>
          {" "}
          {type} | {cost} | {weight}
        </div>
        <TagList tags={tags} />
      </div>
    </div>
  )
}

export const query = graphql`
  fragment ItemFragment on Mdx {
    frontmatter {
      title
      tags
      cost
      weight
      type
      description
      # image
    }
  }
`
