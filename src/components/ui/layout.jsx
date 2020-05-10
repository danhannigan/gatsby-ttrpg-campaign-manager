/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import { jsx, Container } from "theme-ui"

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
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <main
        sx={{
          width: "100%",
          flex: "1 1 auto",
        }}
      >
        <Container>{children}</Container>
      </main>
      <footer
        sx={{
          width: "100%",
        }}
      >
        <Container>Footer</Container>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
