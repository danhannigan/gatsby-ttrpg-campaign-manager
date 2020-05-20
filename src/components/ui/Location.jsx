/** @jsx jsx */
import React from "react"
import { graphql } from "gatsby"
import TagList from "ui/TagList"
import { jsx } from "theme-ui"

export default function Location({ frontmatter: { title, tags }, excerpt }) {
  return (
    <div>
      <h4 sx={{ m: 0, p: 0 }}>{title}</h4>
      <TagList tags={tags} />
    </div>
  )
}

export const query = graphql`
  fragment LocationFragment on Mdx {
    frontmatter {
      title
      tags
    }
  }
`
