import { gql } from "apollo-server-lambda";

export default gql`
  type Mutation {
    helloMutation(input: HelloInput!): String!
  }
`;
