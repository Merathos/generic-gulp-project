import { Subtitle } from 'elements';
import { Title, H4, List, StyledIcon } from './styles';

const Values = props => {
  const {
    data: { title, items }
  } = props;
  return (
    <>
      <Title content={title} />
      <List>
        {items.map((el, i) => (
          <li key={i}>
            <StyledIcon name={el.icon} />
            <H4 content={el.title} />
            <Subtitle>{el.text}</Subtitle>
          </li>
        ))}
      </List>
    </>
  );
};

export default Values;
