export const typeDefs = `#graphql
  type Query {
    technologies(category: TechnologyCategory): [Technology]
    technologyById(id: String): Technology
    me: User
  }

  type Mutation {
    createTechnology(input: CreateTechnologyInput): Technology
    login(input: LoginInput): LoginOutput
    editTechnology(input: EditTechnologyInput): Technology
    deleteTechnology(input: DeleteTechnologyInput): DeleteResponse
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

  type DeleteResponse {
    successful: Boolean
  }

  input DeleteTechnologyInput {
    id: String!
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
