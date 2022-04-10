import { NextPage } from "next";
import Image from "next/image";
import Button from '@atlaskit/button';

type EventType = {
    id: string;
    name: string;
    url: string;
    description: string;
    local:string
    thumbnail: string;
    eventDate: string;
    published_at: string;
}

export const eventPage: NextPage = (children, event:EventType) => {


    return(
        <div>
            <Image src={event.thumbnail} alt={event.name} width='100%' height='50%' ></Image>
            <h1>{event.name}</h1>

            <div className="tickets">
                <ul>
                    <li>
                        <h3>Ingresso 1</h3>
                        <span>R$ 81.01</span>
                        <Button>Comprar</Button>
                    </li>
                </ul>
            </div>

            <div className="details">
                <p>{event.description}</p>
                <span>{event.local}</span>
                <span>{event.eventDate}</span>
            </div>
        </div>
    )
}

