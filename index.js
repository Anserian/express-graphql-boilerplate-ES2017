const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const logger = require('./lib/logger');
const config = require('config');

const PORT = config.get('port');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => 'Hello world!',
};

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(PORT, () => {
    logger.log('info', 'Running a GraphQL API server at localhost:4000/graphql');
});
