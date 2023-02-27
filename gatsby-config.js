require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `frankluongo.com`,
    siteUrl: `https://frankluongo.com`,
  },
  plugins: [
    // Filesystem Access (Images)
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    // Filesystem Access (Pages)
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    // Google Analytics
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-120921374-1",
      },
    },
    // Image
    "gatsby-plugin-image",
    // Manifest
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    // Markdown Remark
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    // MDX
    "gatsby-plugin-mdx",
    // Module Resolver
    {
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: "./src",
        aliases: {
          "#base": "./components/base",
          "#constants": "./constants",
          "#context": "./context",
          "#features": "./components/features",
          "#helpers": "./helpers",
          "#hooks": "./hooks",
          "#lib": "./lib",
          "#presentation": "./presentation",
          "#styles": "./styles",
          static: {
            root: "./public", // <- will used as this alias' root dir
            alias: "./static", // <- will become ./public/static
          },
        },
      },
    },
    // Netlify
    `gatsby-plugin-netlify`,
    // Notion API
    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: process.env.NOTION_KEY,
        databaseId: process.env.NOTION_DATABASE_ID,
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      },
    },
    // Sharp
    "gatsby-plugin-sharp",
    // Sitemap
    "gatsby-plugin-sitemap",
    // Transformer Sharp
    "gatsby-transformer-sharp",
  ],
};
