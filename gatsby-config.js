module.exports = {
  siteMetadata: {
    title: `Mathura Prasad Inter College | Bhaupur Jaunpur U.P.`,
    siteUrl: `https://mpicbhaupur.com`,
    description: "Mathura prasad inter college,  Mathura, prasad, inter, college, intermediate, bahupur, jaunpur, u.p., uttar pradesh, 222136, school, site, satic, government school, government college, best college, app62.tech, web development, app development, app, 62, tech"
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
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:300,400,400i,700`,
        ],
        display: 'swap'
      }
    }
  ]
};