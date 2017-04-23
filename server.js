const babel = require('babel-polyfill');
const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
import { makeExecutableSchema } from 'graphql-tools';
const bodyParser = require('body-parser');
import SchemaDefinition from './src/schema';
import Types from './src/Types';
import resolvers from './src/resolvers';
const logger = require('./lib/logger');
const config = require('config');
const cors = require('cors');

const PORT = config.get('port');

const app = express();

app.use('*', cors());

const schema = makeExecutableSchema({
  typeDefs: [SchemaDefinition, Types],
  resolvers
});

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

if (process.env.NODE_ENV === 'dev') {
  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
  }));
}

app.listen(PORT, () => {
  logger.log('info', `Running a GraphQL API server at localhost:${PORT}/graphql`);
});
