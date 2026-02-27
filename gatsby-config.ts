import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,

  },
  siteMetadata: {
    title: `Neural Networks with Tensorflow Playground `,
    siteUrl: `https://neuralnetworkstensorflowplayground.netlify.app/`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
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
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Neural Networks with Tensorflow Playground`,
      short_name: `NeuralNets`,
      description: `Learn about Neural Networks with Tensorflow Playground`,
      start_url: `/`,
      background_color: `#f7f0eb`,
      theme_color: `#a2466c`,
      display: `standalone`,
      icon: `src/images/icon.png`,
    },
  },
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /\.inline\.svg$/
      }
  },
  },
  'gatsby-plugin-offline']
};

export default config;
