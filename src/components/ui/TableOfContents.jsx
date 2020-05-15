/** @jsx jsx */
import React from "react"
import { jsx, Link } from "theme-ui"

const ToC = ({ items }) => {
  return (
    <>
      <h3>Table of Contents:</h3>
      <ul
        sx={{
          listStyle: "none",
          m: 0,
          p: 0,
        }}
      >
        {items.map(item => (
          <li sx={{ mb: 2 }}>
            {/* <Link to={item.url} variant="sidebar">
              {item.title}
            </Link> */}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ToC
