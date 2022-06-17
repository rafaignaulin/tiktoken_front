import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import Head from 'next/head';
import EventCard from '@components/EventCard';
import * as styles from './styles';
import { api } from '@api/index';
import { Title } from '@components/Title/styles';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
 

interface Event {
    id: string;
    name: string;
    description: string;
    local: {
        city: string;
        uf: string;
    }
    thumbnail: string;
    eventDate: string;
    createdAt: string;
    updatedAt:string;
}

interface HomeProps {
    featuredEvents: Event[];
    allEvents: Event[];
  }

const dashboardPage = ({featuredEvents, allEvents}:HomeProps) => {
  const user = {
    name: 'Rafael',
    avatar_url: '/assets/avatars/147142.png',
  };
  console.log(featuredEvents)
  const events = [...featuredEvents, ...allEvents]
  console.log(events)
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
                    <span>{event.local.city}{event.local.uf}</span>
                    <span>{event.eventDate}</span>
                </div>
                        ))}
            </AwesomeSlider>

        </styles.FeaturedEvents>
        <styles.AllEvents>
          <ul>
            {events.map((event, index) => (
              <EventCard id={event.id}
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

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await api.get('events', {
      params: {
        _limit: 12,
        _sort: 'published_at',
        _order: 'desc'
      }
    });
    const eventData:Event[] = data;
    const events = eventData.map(event => {
      return {
        id: event.id,
        name: event.name,
        thumbnail: event.thumbnail,
        description: event.description,
        local: {
            city: event.local.city,
            uf: event.local.uf
        },
        eventDate: event.eventDate,
        createdAt: event.createdAt,
        updatedAt: event.updatedAt
      };
    })
  
    const featuredEvents = events.slice(0, 2);
    const allEvents = events.slice(2, events.length);
    return {
      props:  {
        featuredEvents,
        allEvents,
      },
      revalidate: 60 * 60 * 8, 
    }
  }


export default dashboardPage;
