import Button from "@atlaskit/button";
import Title from "@components/Title";
import { api } from "@services/api";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
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
  created_at: string;
  updated_at: string;
}

interface EventProps {
  event: Event;
}

const EventPage: NextPage = (children, { event }: EventProps) => {
  return (
    <styles.Main>
      <styles.Title>
        <Title>Concerto gigante</Title>
      </styles.Title>
      <styles.Principal>
        <styles.Description>
          <img src="/assets/pty.png" alt="event" />
          <span>23 de abril de 2022</span>
          <span>25 de abril de 2022</span>

          <span>Chapecó - SC</span>
          <span>Cachoeirinhas do são joao</span>
          <p>
            Este concerto é um belo concerto pois é um concerto, Este concerto é
            um belo concerto pois é um concerto, Este concerto é um belo
            concerto pois é um concerto.
          </p>
        </styles.Description>
        <styles.Tickets>
          <Title>Tickets</Title>
          <Title size={1}>Tipos de Tickets</Title>
          <styles.TicketType>
            <strong>Inteira antecipada</strong>
            <styles.QuantityTicket>0</styles.QuantityTicket>
            <span>99,99</span>
          </styles.TicketType>
          <styles.TicketType>
            <strong>Inteira antecipada</strong>
            <styles.QuantityTicket>0</styles.QuantityTicket>
            <span>99,99</span>
          </styles.TicketType>
          <styles.TicketType>
            <strong>Inteira antecipada</strong>
            <styles.QuantityTicket>0</styles.QuantityTicket>
            <span>99,99</span>
          </styles.TicketType>
          <styles.TicketType>
            <strong>Inteira antecipada</strong>
            <styles.QuantityTicket>0</styles.QuantityTicket>
            <span>99,99</span>
          </styles.TicketType>

          <styles.TicketTotal>
            <Title>Total = R$ 399,96</Title>
            <Button appearance="primary">Comprar Ticket</Button>
          </styles.TicketTotal>
        </styles.Tickets>
      </styles.Principal>
    </styles.Main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get("events", {
    params: {
      _limit: 2,
      _sort: "published_at",
      _order: "desc"
    }
  });

  const paths = data.map((event) => {
    return {
      params: {
        slug: event.id
      }
    };
  });

  return {
    paths,
    fallback: "blocking"
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;

  const { event } = await api.findEventById(id);

  const eventData = {
    id: event.id,
    name: event.title,
    thumbnail: event.thumbnail,
    description: event.description,
    local: {
      city: event.local.city,
      uf: event.local.uf
    },
    eventDate: event.eventDate,
    created_at: event.created_at,
    updated_at: event.updated_at
  };

  return {
    props: {
      eventData
    },
    revalidate: 60 * 60 * 24 // 24h
  };
};

export default EventPage;
