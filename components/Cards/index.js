import { Advert, TeamCard } from 'components';
import { List } from './styles';

const Cards = props => {
  const { data, type } = props;
  return (
    <section>
      <List>
        {data.map((el, i) => (
          <li key={i}>
            {type === 'teams' ? <TeamCard data={el} /> : <Advert data={el} />}
          </li>
        ))}
      </List>
    </section>
  );
};

export default Cards;
