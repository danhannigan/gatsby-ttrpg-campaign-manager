/** @jsx jsx */
import React from "react"
import { graphql } from "gatsby"
import { jsx } from "theme-ui"
import TagList from "ui/TagList"

export default function AdventureLog({
  frontmatter: { title, date, locations, gameDate },
  excerpt,
}) {
  return (
    <div>
      <h4 sx={{ m: 0, p: 0 }}>{title}</h4>
      <div>
        {" "}
        {date} | {gameDate}
      </div>
      <TagList tags={locations} />
      <p>{excerpt}</p>
    </div>
  )
}

export const query = graphql`
  fragment AdventureLogFragment on Mdx {
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
      locations
      gameDate
    }
  }
`
