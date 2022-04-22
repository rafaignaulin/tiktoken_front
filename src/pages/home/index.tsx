import type { NextPage } from 'next';
import Link from 'next/link';

import { Event } from '@dtos/IEventDTO';

import * as styles from './styles';
import Head from 'next/head';

export const events:Event[] = [{
    id: '1',
    name: 'Saidera daora no altas - OPEN BAR',
    local: {
        city: 'Chapeco',
        uf: 'SC'
    },
    description: 'Bela noite para dar uma volta na frente de um dos pontos mais belos de Chapecó, o famoso Altas!',
    thumbnail: '/assets/pty.png',
    eventDate: '2022-04-04'
},
{
    id: '1',
    name: 'Saidera daora no altas- OPEN BAR',
    description:  'Bela noite para dar uma volta na frente de um dos pontos mais belos de Chapecó, o famoso Altas!',
    local: {
        city: 'Chapeco',
        uf: 'SC'
    },
    thumbnail: '/assets/pty_large.png',
    eventDate: '2022-04-31'
},
{
    id: '1',
    name: 'Saidera daora no altas- OPEN BAR',
    description: 'Bela noite para dar uma volta na frente de um dos pontos mais belos de Chapecó, o famoso Altas!',
    local: {
        city: 'Chapeco',
        uf: 'SC'
    },
    thumbnail: '/assets/pty_large.png',
    eventDate: '2022-05-23'
},
{
    id: '1',
    name: 'Saidera daora no altas- OPEN BAR',
    description: 'Bela noite para dar uma volta na frente de um dos pontos mais belos de Chapecó, o famoso Altas!',
    local: {
        city: 'Chapeco',
        uf: 'SC'
    },
    thumbnail: '/assets/pty.png',
    eventDate: '2022-06-07'
},
];

const dashboardPage: NextPage = () => {
    const user = { 
        name: 'Rafael',
        avatar_url: '/assets/avatars/147142.png'
    }

    
    return (
        <>
            <Head>
                <title>Home | Tiktoken</title>
            </Head>

            <styles.Events>
                <h1> Trending events</h1>

                <styles.TrendingEvents>
                    <ul>
                    {events.map((event, index) => {
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
export default dashboardPage