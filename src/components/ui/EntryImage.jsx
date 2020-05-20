/** @jsx jsx */

import React from "react"
import Img from "gatsby-image"
import { jsx } from "theme-ui"

const EntryImage = ({ image }) => {
  return (
    <>
      {image !== null ? (
        <Img
          fluid={image.childImageSharp.fluid}
          sx={{
            width: ["50px", "50px", "75px"],
            height: ["50px", "50px", "75px"],
            mr: 3,
          }}
        />
      ) : (
        <div
          sx={{
            width: ["50px", "50px", "75px"],
            height: ["50px", "50px", "75px"],
            mr: 3,
            background: "#efefef",
            border: "1px solid #ddd",
          }}
        ></div>
      )}
    </>
  )
}

export default EntryImage
