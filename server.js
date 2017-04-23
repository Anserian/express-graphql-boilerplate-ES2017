const babel = require('babel-polyfill'); // eslint-disable-line
import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import bodyParser from 'body-parser';
import SchemaDefinition from './src/schema';
import Types from './src/Types';
import resolvers from './src/resolvers';
import logger from './lib/logger';
import cors from 'cors';
const config = require('config');

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
