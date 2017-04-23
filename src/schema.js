import { querySchema } from './Queries';

const SchemaDefinition = `
  type Query {
    ${querySchema}
  }
  schema {
    query: Query
  }
`;

export default SchemaDefinition;
