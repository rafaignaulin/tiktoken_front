import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import { Event } from '@dtos/IEventDTO';

import * as styles from './styles';
import Head from 'next/head';
import { api } from '@api/index';


type EventProps = {
    featuredEvents: Event[],
    allEvents: Event[]
}

const dashboardPage: NextPage = ( children, {featuredEvents, allEvents}:EventProps) => {
    const user = { 
        name: 'Rafael',
        avatar_url: '/assets/avatars/147142.png'
    }

    return (
        <>
        <p>{allEvents}</p>
            <Head>
                <title>Home | Tiktoken</title>
            </Head>

            <styles.Events>
                <h1> Trending events</h1>

                <styles.TrendingEvents>
                    <ul>
                    {allEvents.map((event, index) => {
                        return (
                            <li key={event.id}>

                                <img src={event.thumbnail} alt={event.name} />
                                <Link  href={`/events/${event.id}`}>
                                    <a>{event.name}</a>
                                </Link>

                                <styles.EventDetails>
                                    <div>
                                        <p>{event.description}</p>
                                        <span>{event.local.city} - {event.local.uf}</span>
                                    </div>

                                    <styles.DateBox>
                                        <strong>{event.eventDate?.split('-')[2]}</strong>
                                        <strong>{event.eventDate?.split('-')[1]}</strong>
                                        <span>{event.eventDate?.split('-')[0]}</span>
                                    </styles.DateBox>

                                </styles.EventDetails>
                            </li>
                        )
                    })}
                    </ul>
                </styles.TrendingEvents>
            </styles.Events>
        </> 
)

}


export const getStaticProps: GetStaticProps = async () => {
    const { data } = await api.get('events');
  
    const events = data.map((event:Event) => {
      return {
        id: event.id,
        name: event.name,
        thumbnail: event.thumbnail,
        local_city: event.local.city,
        local_uf: event.local.uf,
        description: event.description,
        eventDate: event.eventDate
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

export default dashboardPage