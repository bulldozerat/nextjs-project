import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Query {
    getUsers: [User]
    getUser(name: String!): User!
    books: [Book]
  }

  type User {
    id: ID
    login: String
    avatar_url: String
  }
`;
