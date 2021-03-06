/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import { jsx } from "theme-ui"

const Sidebar = ({ children }) => {
  return (
    <aside
      sx={{
        paddingRight: [0, 4],
        borderRight: ["none", "1px solid #000"],
        minHeight: [0, "80vh"],
        display: ["none", "block", "block"],
      }}
    >
      <div sx={{ position: ["inherit", "relative", "sticky"], top: 3 }}>
        {children}
      </div>
    </aside>
  )
}

export default Sidebar
