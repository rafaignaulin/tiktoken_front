import { trpc } from "@utils/trpc";

const Fun = () => {
  const { data, isLoading, isFetching } = trpc.useQuery([
    "foo.hello",
    { text: "world" }
  ]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data?.greeting}</h1>
    </div>
  );
};

export default Fun;
