type Phases = "NOT_ASKED" | "PENDING" | "SUCCESS" | "ERROR";

type ApiCall<D, E> =
  | { phase: "NOT_ASKED" }
  | { phase: "PENDING" }
  | { phase: "SUCCESS"; data: D }
  | { phase: "ERROR"; error: E };
