import { EventCard } from 'components';
import { List, Item } from './styles';

const EventList = props => {
  const { cards, completed } = props;

  return (
      <List>
        {cards.map((el, i) => (
          <Item key={i}>
            <EventCard card={el} completed={completed} />
          </Item>
        ))}
      </List>
  );
};

export default EventList;