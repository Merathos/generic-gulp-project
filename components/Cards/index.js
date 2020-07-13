import { Advert } from 'components';
import { List } from './styles';

const Cards = props => {
  const { data } = props;
  return (
    <section>
      <List>
        {data.map((el, i) => (
          <li key={i}>
            <Advert data={el} />
          </li>
        ))}
      </List>
    </section>
  );
};

export default Cards;
