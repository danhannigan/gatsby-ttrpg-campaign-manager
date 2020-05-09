/** @jsx jsx */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { jsx, Flex, NavLink } from "theme-ui"

const Header = ({ siteTitle, location }) => (
  <header>
    <Flex as="nav" sx={{ maxWidth: "container", margin: "0 auto" }}>
      <div sx={{ flex: "1 1 auto" }}>
        <NavLink as={Link} to="/" sx={{ py: 2 }}>
          {siteTitle}
        </NavLink>
      </div>
      <NavLink
        as={Link}
        to="/adventure-logs"
        sx={{
          mr: 3,
          py: 2,
        }}
      >
        Adventure Logs
      </NavLink>
      <NavLink
        as={Link}
        to="/party"
        sx={{
          mr: 3,
          py: 2,
        }}
      >
        Party
      </NavLink>
      <NavLink
        as={Link}
        to="/npcs"
        sx={{
          mr: 3,
          py: 2,
        }}
      >
        NPCs
      </NavLink>
      <NavLink
        as={Link}
        to="/items"
        sx={{
          mr: 3,
          py: 2,
        }}
      >
        Items
      </NavLink>
      <NavLink
        as={Link}
        to="/locations"
        sx={{
          mr: 3,
          py: 2,
        }}
      >
        Locations
      </NavLink>
    </Flex>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
