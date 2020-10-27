import { EventCard } from 'components';
import { List, Item } from './styles';

const EventList = props => {
  const { events } = props;

  return (
    <List>
      {events.map(event => (
        <Item key={event.id}>
          <EventCard event={event} completed={false} />
        </Item>
      ))}
    </List>
  );
};

export default EventList;
