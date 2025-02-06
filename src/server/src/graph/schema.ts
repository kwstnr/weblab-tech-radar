export const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
    technologies: [Technology]
    technologyById(id: String): Technology
  }

  type Mutation {
    createTechnology(input: CreateTechnologyInput): Technology
  }

  type Technology {
    id: String
    name: String
    description: String
    category: Int
    circle: Int
    circleDescription: String
    status: Int
    created: String
    published: String
    changed: String
  }

  input CreateTechnologyInput {
    name: String
    description: String
    category: Int
    circle: Int
    circleDescription: String
    status: Int
  }
`;
