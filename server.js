const babel = require('babel-polyfill');
const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const bodyParser = require('body-parser');
const schema = require('./data/schema');
const logger = require('./lib/logger');
const config = require('config');
const cors = require('cors');

const PORT = config.get('port');

const app = express();

app.use('*', cors());

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
}));

if (process.env.NODE_ENV === 'dev') {
  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
  }));
}

app.listen(PORT, () => {
  logger.log('info', `Running a GraphQL API server at localhost:${PORT}/graphql`);
});
