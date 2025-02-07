export const typeDefs = `#graphql
  type Query {
    technologies: [Technology]
    technologyById(id: String): Technology
    me: User
  }

  type Mutation {
    createTechnology(input: CreateTechnologyInput): Technology
    login(input: LoginInput): LoginOutput
    editTechnology(input: EditTechnologyInput): Technology
  }

  type Technology {
    id: String
    name: String
    description: String
    category: TechnologyCategory
    circle: TechnologyCircle
    circleDescription: String
    status: TechnologyStatus
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
    role: Role
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input CreateTechnologyInput {
    name: String!
    description: String!
    category: TechnologyCategory!
    circle: TechnologyCircle
    circleDescription: String
    status: TechnologyStatus!
  }

  input EditTechnologyInput {
    id: String!
    name: String
    description: String
    category: TechnologyCategory
    circle: TechnologyCircle
    circleDescription: String
    status: TechnologyStatus
  }

  enum TechnologyStatus {
    DRAFTED
    PUBLISHED
  }

  enum TechnologyCircle {
    ASSESS
    TRIAL
    ADOPT
    HOLD
  }

  enum TechnologyCategory {
    TECHNIQUES
    TOOLS
    PLATFORMS
    LANGUAGES
    FRAMEWORKS
  }

  enum Role {
    EMPLOYEE
    ADMIN
  }
`;
