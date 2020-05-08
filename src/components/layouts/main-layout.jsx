import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div>
        <header>
          <Link to="/">{data.site.siteMetadata.title}</Link>
          <nav>
            <Link to="/adventure-logs">Adventure Logs</Link>
            <Link to="/npcs">NPCs</Link>
            <Link to="/locations">Locations</Link>
            <Link to="/items">Items</Link>
          </nav>
        </header>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
