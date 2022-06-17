import Link from 'next/link';

import * as styles from './styles';

interface Event {
    id: string;
    name: string;
    description: string;
    thumbnail: string;
    local: {
        city: string;
        uf: string;
    }
    eventDate: string;

}

function EventCard({
  id, name, description, thumbnail, local, eventDate,
}: Event) {
  return (
    <li key={id}>

      <img src={thumbnail} alt={name} />
      <Link href={`/home//${id}`}>
        <a>{name}</a>
      </Link>

      <styles.EventDetails>
        <div>
          <p>{description}</p>
          <span>
            {local.city}
            {' '}
            -
            {' '}
            {local.uf}
          </span>
        </div>

        <styles.DateBox>
          <strong>{eventDate?.split('-')[2]}</strong>
          <strong>{eventDate?.split('-')[1]}</strong>
          <span>{eventDate?.split('-')[0]}</span>
        </styles.DateBox>

      </styles.EventDetails>
    </li>
  );
}

export default EventCard;
