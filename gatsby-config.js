module.exports = {
  siteMetadata: {
    title: `RocketPulse.io`,
    description: `Lancez dès maintenant votre prochain projet ! Nous vous accompagnons dans la réalisation de celui-ci en vous apportant un point de vue de développeur et en vous assurant une réussite technique !`,
    author: `@rocketpulse`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rocketpulse.io`,
        short_name: `rocketpulse.io`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    'gatsby-plugin-offline',
  ],
};
