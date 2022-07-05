export default {
  jwt: {
    secret: process.env.APP_SECRET || "any",
    expiresIn: process.env.SESSION_EXPIRES_IN || "1d"
  }
};
