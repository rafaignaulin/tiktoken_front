import { prisma } from "@backend/util/prisma";
import { authenticateUserSchema, createUserSchema } from "@type/schemas";
import * as hash from "@utils/providers/hash";
import { sign } from "jsonwebtoken";
import auth from "../../../config/auth";
import { createRouter } from "./app";

export const users = createRouter()
  .middleware(({ ctx, next }) => {
    console.log(ctx.user);

    return next();
  })
  .mutation("authenticate", {
    input: authenticateUserSchema,
    async resolve({ input, ctx }) {
      console.log("****", input, ctx);
      const user = await prisma.user.findFirstOrThrow({
        where: { email: input.email }
      });
      const isValid = await hash.compare(input.password, user.password);
      if (!isValid) {
        throw new Error("Invalid password");
      }
      const token = sign({}, auth.jwt.secret, {
        subject: user.id,
        expiresIn: auth.jwt.expiresIn
      });
      return { token };
    }
  })
  .mutation("create", {
    input: createUserSchema,
    async resolve({ input }) {
      const alreadyExistis = await prisma.user.findFirst({
        where: { email: input.email }
      });

      if (alreadyExistis) {
        throw new Error("User already exists");
      }

      const user = await prisma.user.create({
        data: {
          ...input,
          password: await hash.digest(input.password),
          type: "USER"
        }
      });
      return user.id;
    }
  });
