import { SearchEvent } from "@type/schemas";

type EventListRendererProps = {
  events: SearchEvent[];
};

const EventListRenderer: React.FC<EventListRendererProps> = ({ events }) => {
  return (
    <>
      {events.map((e) => (
        <div key={e.id}>
          <h2>{e.title}</h2>
          <p>{e.description}</p>
          <span>{e.location}</span>
          <span>{String(e.date)}</span>
        </div>
      ))}
    </>
  );
};

export default EventListRenderer;
