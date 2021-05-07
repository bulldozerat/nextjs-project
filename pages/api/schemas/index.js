import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Query {
    getUsers: [User]
    getUser(name: String!): User!
    libraries: [Library]
  }

  type Mutation {
    addBook(title: String, author: String, branch: String): Book
  }

  type User {
    id: ID
    login: String
    avatar_url: String
  }

  type Library {
    branch: String!
    books: [Book!]
  }

  type Book {
    title: String!
    author: Author!
  }

  type Author {
    name: String!
  }
`;
