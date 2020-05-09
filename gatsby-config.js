module.exports = {
  siteMetadata: {
    title: `Eberron Adventure`,
    description: `Four heroes are bound together by a journey in the land of Eberron.`,
    author: `@danhannigan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-theme-ui",
    `gatsby-remark-images`,
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
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "adventure-log",
        path: `${__dirname}/src/content/adventure-log/`,
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "npcs",
        path: `${__dirname}/src/content/npcs/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "party",
        path: `${__dirname}/src/content/party/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/party/data/ddb-char-sheets`,
      },
    },
  ],
}
