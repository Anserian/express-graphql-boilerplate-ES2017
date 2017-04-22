import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';
import { Character } from './types/Character';

const SchemaDefinition = `
  type Query {
    characters: [Character]
    test: String
  }
  schema {
    query: Query
  }
`;

module.exports = makeExecutableSchema({
  typeDefs: [SchemaDefinition, Character],
  resolvers,
});
