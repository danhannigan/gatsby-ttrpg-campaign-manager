/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

const TagList = ({ tags }) => {
  return (
    <ul sx={{ listStyle: "none", display: "flex", m: 0, p: 0, fontSize: 1 }}>
      <span sx={{ margin: 0, padding: 0 }}>Tags: </span>
      {tags.map(tag => (
        <li key={tag} sx={{ ml: 1, background: "#efefef", px: 1 }}>
          {tag}
        </li>
      ))}
    </ul>
  )
}

export default TagList
