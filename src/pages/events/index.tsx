import Gallery from "@components/Gallery";
import { NextPage } from "next";

const EventPage: NextPage = (children, { event }) => {
  return (
    <div>
      <div className="text-6xl text-red-200">filtros...</div>
      <h2 className="text-2xl p-4">About</h2>
      <h1>Eventos</h1>
      <Gallery />
    </div>
  );
};

export default EventPage;
