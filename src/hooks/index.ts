import { useMemo } from "react";

type MapperType<D, E> =
  | { NOT_ASKED: () => React.ReactNode }
  | { PENDING: () => React.ReactNode }
  | { SUCCESS: (data: D) => React.ReactNode }
  | { ERROR: (error: E) => React.ReactNode };

export const useApiCallRender =
  <D, E>(mapper: MapperType<D, E>) =>
  (apiCall: ApiCall<D, E>): JSX.Element => {
    return useMemo(() => {
      const { phase } = apiCall;
      if (phase === "SUCCESS") {
        return mapper[phase](apiCall.data);
      } else if (apiCall.phase === "ERROR") {
        return mapper[phase](apiCall.error);
      } else return mapper[phase]();
    }, [apiCall, mapper]);
  };
