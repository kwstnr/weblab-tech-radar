export const typeDefs = `#graphql
  type Query {
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
    category: String
    circle: String
    circleDescription: String
    status: String
    created: String
    published: String
    changed: String
  }

  input CreateTechnologyInput {
    name: String
    description: String
    category: String
    circle: String
    circleDescription: String
    status: String
  }
`;
