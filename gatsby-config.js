module.exports = {
  siteMetadata: {
    title: "My Portfolio",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    'gatsby-plugin-gatsby-cloud'
  ],
};