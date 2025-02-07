export const typeDefs = `#graphql
  type Query {
    technologies: [Technology]
    technologyById(id: String): Technology
    me: User
  }

  type Mutation {
    createTechnology(input: CreateTechnologyInput): Technology
    login(input: LoginInput): LoginOutput
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

  type LoginOutput {
    successful: Boolean
    jwtToken: String
  }

  type User {
    name: String
    email: String
    role: String
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input CreateTechnologyInput {
    name: String!
    description: String!
    category: String!
    circle: String
    circleDescription: String
    status: String!
  }
`;
