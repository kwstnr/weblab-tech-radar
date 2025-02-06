import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from 'dotenv';

import { resolvers } from "./graph/resolvers";
import { typeDefs } from "./graph/schema";

import { DbContextFactory } from './data/db-context.factory';

dotenv.config();

const connectionString = process.env.DATABASE_URI;

if (!connectionString) {
  console.error('No DB ConnectionString set in environment variables.');
  process.exit(1);
}

const dbContextFactory = new DbContextFactory(connectionString);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => ({
    dbContext: await dbContextFactory.getDbContext()
  })
});

console.log(`Server ready at: ${url}`);

