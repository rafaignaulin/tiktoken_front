import { appRouter } from "@backend/router/app";
import * as trpcNext from "@trpc/server/adapters/next";

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: ({ req, res }) => {
    return {
      user: {
        token: req.headers.authorization || ""
      }
    };
  }
});
