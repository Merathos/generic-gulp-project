import { Title, H4, List, StyledIcon, Text } from './styles';

const Values = props => {
  const {
    data: { title, items },
  } = props;
  return (
    <>
      <Title>{title}</Title>
      <List>
        {items.map((el, i) => (
          <li key={i}>
            <StyledIcon name={el.icon} />
            <H4>{el.title}</H4>
            <Text>{el.text}</Text>
          </li>
        ))}
      </List>
    </>
  );
};

export default Values;
