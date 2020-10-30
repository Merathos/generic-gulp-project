import { EventCard } from 'components';
import { List, Item } from './styles';

const EventList = ({ events, completed }) => {
  return (
    <List>
      {events.map(event => (
        <Item key={event.id}>
          <EventCard event={event} completed={completed} />
        </Item>
      ))}
    </List>
  );
};

export default EventList;
