/** @jsx jsx */
import React, { useState } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { jsx, Flex, NavLink, MenuButton } from "theme-ui"

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  const data = useStaticQuery(graphql`
    {
      allDirectory(
        filter: {
          base: { ne: "images" }
          sourceInstanceName: { ne: "images" }
          relativeDirectory: { eq: ".." }
        }
      ) {
        edges {
          node {
            name
          }
        }
      }
    }
  `)

  return (
    <header>
      <Flex
        as="nav"
        sx={{
          maxWidth: "container",
          margin: "0 auto",
          py: 3,
          px: [3, 0, 0],
          borderBottom: "1px solid #000",
          flexWrap: "wrap",
          overflow: "hidden",
          background: "#fff",
          height: [isOpen ? "273px" : "70px"],
          transition: "height 133ms ease-in",
          position: ["fixed", "fixed", "inherit"],
          top: "0",
          width: "100%",
          zIndex: "10",
        }}
      >
        <div sx={{ flex: "1 1 auto" }}>
          <NavLink as={Link} to="/" sx={{ py: 2 }}>
            {siteTitle}
          </NavLink>
        </div>
        <MenuButton
          sx={{ display: ["inline-block", "inline-block", "none"] }}
          aria-label="Toggle Menu"
          onClick={toggle}
        />
        <div
          sx={{
            display: "flex",
            flexDirection: ["column", "column", "row"],
            flex: ["1 1 100%", "1 1 100%", "1"],
            justifyContent: ["flex-start", "flex-start", "flex-end"],
          }}
        >
          {data.allDirectory.edges.map(directory => (
            <NavLink
              as={Link}
              to={`/${directory.node.name}/`}
              sx={{
                ml: 3,
                py: 2,
                textTransform: "capitalize",
              }}
              key={directory.node.name}
            >
              {`${directory.node.name.replace(/-/g, " ")}`}
            </NavLink>
          ))}
        </div>
      </Flex>
    </header>
  )
}

export default Header
