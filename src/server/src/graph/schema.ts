export const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
    technologies: [Technology]
  }

  type Technology {
    id: String
    name: String
    description: String
    category: String
    circle: String
    circleDescription: String
    status: String
    created: String
    published: String
    changed: String
  }
`;
