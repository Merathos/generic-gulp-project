import { EventCard } from 'components';
import { Item, List } from './styles';

const EventList = ({ events, completed }) => {
  return (
    <List>
      {events.map(event => (
        <Item key={event.id}>
          <EventCard
            category={event.category}
            slug={event.slug}
            startsAt={event.starts_at}
            endsAt={event.ends_at}
            status={event.status}
            programs={event.programs}
            location={event.location}
            completed={completed}
          />
        </Item>
      ))}
    </List>
  );
};

export default EventList;
