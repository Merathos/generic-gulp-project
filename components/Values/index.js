import { Subtitle } from 'elements';
import { Title, H4, List, StyledIcon, Wrapper } from './styles';

const Values = props => {
  const {
    data: { title, items },
  } = props;
  return (
    <Wrapper>
      <Title>{title}</Title>
      <List>
        {items.map((el, i) => (
          <li key={i}>
            <StyledIcon name={el.icon} />
            <H4>{el.title}</H4>
            <Subtitle>{el.text}</Subtitle>
          </li>
        ))}
      </List>
    </Wrapper>
  );
};

export default Values;
