import Head from "next/head";

import { api } from "@services/api";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import * as styles from "./styles";


interface HomeProps {
  events: any[];
}

const dashboardPage = ({ events }: HomeProps) => {
  console.log("*** events", events);
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
              <div key={event.id}>
                <span>{event.title}</span>
              </div>
            ))}
          </AwesomeSlider>
        </styles.FeaturedEvents>
      </styles.Events>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const { data } = await api.findAllEvents({});
  return {
    props: {
      events: data[0]
    }
  };
}

export default dashboardPage;
