import Gallery from "@components/Gallery";
import Search from "@components/Header/Search";
import { NextPage } from "next";
import { useRouter } from "next/router";

const EventPage: NextPage = (children, { event }) => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col justify-items-center  px-16 items-center pt-8">
        <div className="h-2" />
        <div className="flex flex-inline w-full space-x-16">
          <div className="flex flex-inline  text-4xl grow bg-gray-300 p-2 rounded">
            <Search />
          </div>
          <button
            className="w-32 text-black bg-green-200 rounded"
            onClick={() => router.push("/events/create")}
          >
            Criar evento
          </button>
        </div>
        <div className="h-16" />
        <h1>Eventos</h1>
        <Gallery />
      </div>
    </>
  );
};

export default EventPage;
