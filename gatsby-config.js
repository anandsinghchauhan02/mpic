module.exports = {
  siteMetadata: {
    title: `School Template | This is a best school`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [`gatsby-plugin-fontawesome-css`, "gatsby-plugin-vanilla-extract", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "1234"
    }
  }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    }, `gatsby-transformer-yaml`, "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }]
};