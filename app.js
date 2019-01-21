const express = require('express');

const graphqlHTTP = require('express-graphql');

const { schema } = require('./api/schema');

// The root provides a resolver function for each API endpoint
const root = {
    videoLink: ({ link }) => link
};

const app = express();
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
