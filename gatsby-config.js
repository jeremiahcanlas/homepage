module.exports = {
  siteMetadata: {
    title: "Homepage",
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    }
  ],
  pathPrefix:'/home',
  // flags: {
  //   DEV_SSR: false,
  // }
};
