import type { HelloMutationArgs } from "../types";

export async function helloMutation(
  _: any,
  args: HelloMutationArgs
): Promise<string> {
  const {
    input: { name }
  } = args;

  return `hello ${name}`;
}
