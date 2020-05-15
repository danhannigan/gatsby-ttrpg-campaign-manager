import React from "react"
import { graphql } from "gatsby"

export default function AdventureLog({
  frontmatter: { title, date, locations, gameDate },
  excerpt,
}) {
  return (
    <div>
      <h4>{title}</h4>
      <div>
        {" "}
        {date} | {gameDate}
      </div>
      <ul>
        <h5>Locations</h5>
        {locations.map(tag => (
          <li key={locations}>{locations}</li>
        ))}
      </ul>
      <p>{excerpt}</p>
    </div>
  )
}

export const query = graphql`
  fragment AdventureLogFragment on Mdx {
    frontmatter {
      title
      date
      locations
      gameDate
    }
  }
`
