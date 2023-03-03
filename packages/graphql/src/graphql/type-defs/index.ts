// Inputs
import HelloInput from "./inputs/hello-input";
// Objects
import HelloObject from "./objects/hello-object";
// Root types
import Mutation from "./root/Mutation"; // tslint:disable-line ordered-imports
import Query from "./root/Query"; // tslint:disable-line ordered-imports

const typeDefs = [
  // Inputs
  HelloInput,
  // Objects
  HelloObject,
  // Root types
  Mutation,
  Query
];

export default typeDefs;
