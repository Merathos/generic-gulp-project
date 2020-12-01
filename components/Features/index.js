import { Container, Item, Icon, StyledSubtitle } from './styles';

const Features = ({ data }) => (
  <Container>
    {data.map((el, i) => {
      if (el.flag) {
        return (
          <Item key={i}>
            <Icon name={el.icon} />
            <StyledSubtitle>{el.title}</StyledSubtitle>
          </Item>
        );
      }
      return false;
    })}
  </Container>
);

export default Features;
