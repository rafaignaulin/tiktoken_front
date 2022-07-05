import * as trpc from "@trpc/server";
import { z } from "zod";
import { users } from "./user";

const foo = trpc.router().query("hello", {
  input: z
    .object({
      text: z.string().nullish()
    })
    .nullish(),
  resolve({ input }) {
    return {
      greeting: `hello ${input?.text ?? "world"}`
    };
  }
});

import * as trpcNext from "@trpc/server/adapters/next";

// The app's context - is generated for each incoming request
export async function createContext(opts?: trpcNext.CreateNextContextOptions) {
  // Create your context based on the request object
  // Will be available as `ctx` in all your resolvers

  // This is just an example of something you'd might want to do in your ctx fn
  async function getUserFromHeader() {
    if (opts?.req.headers.authorization) {
      // const user = await decodeJwtToken(req.headers.authorization.split(' ')[1])
      // return user;
    }
    return null;
  }
  const user = await getUserFromHeader();

  return {
    user: { token: "" }
  };
}
type Context = trpc.inferAsyncReturnType<typeof createContext>;

// Helper function to create a router with your app's context
export function createRouter() {
  return trpc.router<Context>();
}

export const appRouter = createRouter()
  .merge("user.", users)
  .merge("foo.", foo);

// export type definition of API
export type AppRouter = typeof appRouter;
