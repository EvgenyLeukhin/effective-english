module.exports = {
  pathPrefix: "/effective-english",
  siteMetadata: {
    title: `Effective English`,
    author: `Evgeny Leukhin`,
    description: `Effective English Blog`,
    siteUrl: `https://evgenyleukhin.github.io/effective-english/`,
    social: { twitter: `kylemathews` },
  },

  plugins: [
    { resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/content/blog`, name: `blog` }},

    { resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/content/assets`, name: `assets`}},

    { resolve: `gatsby-plugin-typography`,
      options: { pathToConfigModule: `src/utils/typography` }},

    { resolve: `gatsby-plugin-google-analytics`,
      options: {}}, // trackingId: `ADD YOUR TRACKING ID HERE`

    { resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          { resolve: `gatsby-remark-images`,
            options: { maxWidth: 590 }},

          { resolve: `gatsby-remark-responsive-iframe`,
            options: { wrapperStyle: `margin-bottom: 1.0725rem` }},

          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    
    
    { resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Effective English Blog`,
        short_name: `Effective English`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/logo.png`,
      }},

      `gatsby-plugin-feed`,
      `gatsby-plugin-offline`,
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
    ],
  }
