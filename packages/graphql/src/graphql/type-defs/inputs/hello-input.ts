import { gql } from "apollo-server-lambda";

export default gql`
  input HelloInput {
    name: String!
  }
`;
