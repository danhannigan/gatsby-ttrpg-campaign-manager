/** @jsx jsx */
import React from "react"
import { jsx, Link } from "theme-ui"

const ToC = ({ items }) => {
  return (
    <>
      <h3 sx={{ mt: 3, mb: 2, borderBottom: "1px solid #efefef" }}>
        Table of Contents
      </h3>
      <ul
        sx={{
          listStyle: "none",
          m: 0,
          p: 0,
        }}
      >
        {items.map(item => (
          <li sx={{ mb: 1, pl: 1, fontSize: 1 }}>
            <a
              href={item.url}
              variant="sidebar"
              sx={{ color: "secondary", textDecoration: "none" }}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ToC
