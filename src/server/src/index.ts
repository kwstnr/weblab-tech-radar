import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from 'dotenv';

import { resolvers } from "./graph/resolvers";
import { typeDefs } from "./graph/schema";

dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at: ${url}`);

const connectionString = process.env.DATABASE_URI;

if (!connectionString) {
  console.error('No DB ConnectionString set in environment variables.');
  process.exit(1);
}
