require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: "Justin Rozal",
    siteUrl: 'https://justinrozal.dev'
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
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.S3_BUCKET_NAME,
        acl: null
      },
    },
    'gatsby-plugin-react-helmet'
  ],
};