// Construct a schema, using GraphQL schema language
const { buildSchema } = require('graphql');

module.exports.schema = buildSchema(`
  type Query {
    videoLink(link: String!): String!
  }
`);