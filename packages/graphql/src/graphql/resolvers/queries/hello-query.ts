import type { HelloObject } from "../types";

export async function helloQuery(): Promise<HelloObject> {
  return {
    hello: "world"
  };
}
