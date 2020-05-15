import React from "react"
import { graphql } from "gatsby"
import { Image } from "theme-ui"

export default function Item({
  frontmatter: { title, tags, cost, weight, type, description, image },
}) {
  return (
    <div>
      <h4>{title}</h4>
      <div>
        {" "}
        {type} | {cost} | {weight}
      </div>
      <ul>
        <h5>Tags</h5>
        {tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <Image src={image} />
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
