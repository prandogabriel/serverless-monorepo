import type { Handler } from "aws-lambda";
import { join } from "path";

export const main: Handler = async (event) => {
  console.log(event);

  console.log(`${join(__dirname, "handler")}.main`);
  return {
    statusCode: 200,
    body: "ola"
  };
};

export const helloWorld = {
  // handler: `${join(__dirname, "handler")}.main`,
  handler: `./src/frameworks/serverless/functions/hello/handler.main`,
  events: [
    {
      http: {
        method: "GET",
        path: "/greetings"
      }
    }
  ]
};
