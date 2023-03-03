import { ApolloServer, IResolvers } from "apollo-server-lambda";

import * as mutations from "./resolvers/mutations";
import * as queries from "./resolvers/queries";
import typeDefs from "./type-defs";

const { NODE_ENV } = process.env;

const IS_DEV = !NODE_ENV || !["production"].includes(NODE_ENV);

const resolvers = {
  Mutation: mutations,
  Query: queries
} as IResolvers;

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  // subscriptions: {},
  introspection: IS_DEV
  // context: {},
});

export default apolloServer.createHandler();
