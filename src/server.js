const babel = require('babel-polyfill'); // eslint-disable-line
import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import bodyParser from 'body-parser';
import SchemaDefinition from './schema';
import Types from './Types';
import resolvers from './resolvers';
import jwt from 'express-jwt';
import logger from '../utils/logger';
import cors from 'cors';
const config = require('config');

const PORT = config.get('port');

const app = express();

app.use('*', cors());

const schema = makeExecutableSchema({
  typeDefs: [SchemaDefinition, Types],
  resolvers
});

app.use('/',
  jwt({secret: 'test'}),
  (req, res) => {
    if (!req.user.admin) return res.sendStatus(401);
    res.sendStatus(200);
  }
);

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
