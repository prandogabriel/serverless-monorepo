// import type { Handler } from "aws-lambda";
// import { join } from "path";

import main from "./server";

export { main };
// export const main: Handler = async (event) => {
//   console.log(event);

//   console.log(`${join(__dirname, "handler")}.main`);
//   return {
//     statusCode: 200,
//     body: "ola"
//   };
// };

export const graphql = {
  // handler: `${join(__dirname, "handler")}.main`,
  handler: `./src/frameworks/serverless/functions/apollo/handler.main`,
  events: [
    {
      http: {
        method: "GET",
        path: "/graphql"
      }
    },
    {
      http: {
        method: "POST",
        path: "/graphql"
      }
    }
  ]
};
