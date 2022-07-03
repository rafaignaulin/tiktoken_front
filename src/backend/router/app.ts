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

export const appRouter = trpc.router().merge("user.", users).merge("foo.", foo);

// export type definition of API
export type AppRouter = typeof appRouter;
