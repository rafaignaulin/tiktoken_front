import * as b from "bcryptjs";

const digest = (payload: string): Promise<string> => b.hash(payload, 8);
const compare = (payload: string, digest: string): Promise<boolean> =>
  b.compare(payload, digest);

export { digest, compare };
