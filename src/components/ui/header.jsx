/** @jsx jsx */
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { jsx, Flex, NavLink } from "theme-ui"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query DirectoryQuery {
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
      <Flex as="nav" sx={{ maxWidth: "container", margin: "0 auto" }}>
        <div sx={{ flex: "1 1 auto" }}>
          <NavLink as={Link} to="/" sx={{ py: 2 }}>
            {siteTitle}
          </NavLink>
        </div>
        {data.allDirectory.edges.map(directory => (
          <NavLink
            as={Link}
            to={directory.node.name}
            sx={{
              mr: 3,
              py: 2,
              textTransform: "capitalize",
            }}
            key={directory.node.name}
          >
            {`${directory.node.name.replace(/-/g, " ")}`}
          </NavLink>
        ))}
      </Flex>
    </header>
  )
}

export default Header
