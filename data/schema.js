import { makeExecutableSchema } from 'graphql-tools';

const resolvers = require('./resolvers');

const Author = require('./types/author.js');
const Post = require('./types/post.js');

const SchemaDefinition = `
  type Query {
    posts: [Post]
    author(id: Int!): Author
  }
  type Mutation {
  upvotePost (
    postId: Int!
   ): Post
  }
  schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = makeExecutableSchema({
  typeDefs: [SchemaDefinition, Author, Post],
  resolvers,
});
