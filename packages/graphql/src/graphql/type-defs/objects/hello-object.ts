import { gql } from "apollo-server-lambda";

export default gql`
  type HelloObject {
    hello: String!
  }
`;
