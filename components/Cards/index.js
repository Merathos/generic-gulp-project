import { Advert, TeamCard } from 'components';
import { List, ListItem } from './styles';

const Cards = (props) => {
  const { data, type } = props;

  return (
    <section>
      <List type={type}>
        {data.map((el, i) => {
          if (!el) return false;
          return (
            <ListItem type={type} key={i}>
              {type === 'teams' ? <TeamCard data={el} /> : <Advert data={el} />}
            </ListItem>
          );
        })}
      </List>
    </section>
  );
};

export default Cards;
