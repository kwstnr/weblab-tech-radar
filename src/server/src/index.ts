import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from 'dotenv';

import { resolvers } from "./graph/resolvers";
import { typeDefs } from "./graph/schema";

import { DbContextFactory } from './data/db';
import { TechnologyService, UserService } from './data/service';

dotenv.config();

const connectionString = process.env.DATABASE_URI;

if (!connectionString) {
  console.error('No DB ConnectionString set in environment variables.');
  process.exit(1);
}

const testPassword = process.env.TEST_PASSWORD;

if (!testPassword) {
  console.error('No Test Password set in environment variables');
  process.exit(1);
}

const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) {
  console.error('No jwt Secret set in environment variables');
  process.exit(1);
}


const dbContextFactory = new DbContextFactory(connectionString, testPassword);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req }) => {
    const dbContext = await dbContextFactory.getDbContext();
    const userService = new UserService(dbContext, jwtSecret);

    let authInformation = undefined;
    if (req.headers.authorization) {
      authInformation = await userService.getAuthInformationByJwtToken(req.headers.authorization.replace('Bearer ', ''));
    }

    return {
      userService,
      technologyService: new TechnologyService(dbContext),
      authInformation: authInformation,
    };
  },
});

console.log(`Server ready at: ${url}`);

