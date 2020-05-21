const remarkSlug = require("remark-slug")
const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Eberron Adventure`,
    description: `Four heroes are bound together by a journey in the land of Eberron.`,
    author: `@danhannigan`,
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    "gatsby-plugin-theme-ui",
    `gatsby-remark-images`,
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          ui: `./src/components/ui/`,
          components: `./src/components/`,
        },
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Eczar", "Lato"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-ttrpg-campaign-manager`,
        short_name: `ttrpg-campaign-manager`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#CD2B1E`,
        display: `minimal-ui`, // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "MDXImages",
        path: "src/images/",
      },
      __key: "src/images",
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
            },
            remarkPlugins: [remarkSlug],
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "adventure-logs",
        path: `${__dirname}/src/content/adventure-logs/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "characters",
        path: `${__dirname}/src/content/characters/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "items",
        path: `${__dirname}/src/content/items/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "locations",
        path: `${__dirname}/src/content/locations/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/characters/data/ddb-char-sheets`,
      },
    },
  ],
}
