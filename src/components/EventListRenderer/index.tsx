import { SearchEvent } from "@type/schemas";

type EventListRendererProps = {
  events: SearchEvent[];
};

const EventListRenderer: React.FC<EventListRendererProps> = ({ events }) => {
  return (
    <div className="flex flex-wrap w-full py-8">
      {events.map((e) => (
        <div
          key={e.id}
          className="bg-white truncate flex-inline w-1/5 border-gray-100 border-2 rounded-lg shadow-lg p-4"
        >
          <h3 className="capitalize">{e.title}</h3>
          <div className="h-2" />
          <p>{e.description}</p>
          <p>{e.description}</p>
          <p>{e.description}</p>
          <p>{e.description}</p>
          <span>{e.description}</span>
          <span>{e.location}</span>
          <span>{String(e.date)}</span>
        </div>
      ))}
    </div>
  );
};

export default EventListRenderer;
