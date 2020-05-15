import React from "react"
import { graphql } from "gatsby"

export default function Location({ frontmatter: { title, tags }, excerpt }) {
  return (
    <div>
      <h4>{title}</h4>
      <ul>
        <h5>Locations</h5>
        {tags.map(tag => (
          <li key={tags}>{tags}</li>
        ))}
      </ul>
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
