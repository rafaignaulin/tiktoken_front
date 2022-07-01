import EventCard from "@components/EventCard";
import Head from "next/head";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import * as styles from "./styles";


interface Event {
  id: string;
  name: string;
  description: string;
  local: {
    city: string;
    uf: string;
  };
  thumbnail: string;
  eventDate: string;
  createdAt: string;
  updatedAt: string;
}

interface HomeProps {
  featuredEvents: Event[];
  allEvents: Event[];
}

const dashboardPage = ({ featuredEvents, allEvents }: HomeProps) => {
  const user = {
    name: "Rafael",
    avatar_url: "/assets/avatars/147142.png"
  };
  console.log(featuredEvents);
  const events = [];
  console.log(events);
  return (
    <>
      <Head>
        <title>Home | Tiktoken</title>
      </Head>

      <styles.Events>
        <title> Featured Events</title>

        <styles.FeaturedEvents>
          <title> All Events</title>
          <AwesomeSlider>
            {events.map((event, index) => (
              <div>
                <span>{event.id}</span>
                <span>{event.name}</span>
                <span>{event.thumbnail}</span>
                <span>{event.description}</span>
                <span>
                  {event.local.city}
                  {event.local.uf}
                </span>
                <span>{event.eventDate}</span>
              </div>
            ))}
          </AwesomeSlider>
        </styles.FeaturedEvents>
        <styles.AllEvents>
          <ul>
            {events.map((event, index) => (
              <EventCard
                id={event.id}
                name={event.name}
                description={event.description}
                thumbnail={event.thumbnail}
                local={event.local}
                eventDate={event.eventDate}
              />
            ))}
          </ul>
        </styles.AllEvents>
      </styles.Events>
    </>
  );
};

export default dashboardPage;
