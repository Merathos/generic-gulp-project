import { Subtitle } from 'elements';
import { Container, Item, Icon } from './styles';

const Features = ({ data }) => (
  <Container>
    {data.map((el, i) => {
      if (el.flag) {
        return (
          <Item key={i}>
            <Icon name={el.icon} />
            <Subtitle>{el.title}</Subtitle>
          </Item>
        );
      }
      return false;
    })}
  </Container>
);

export default Features;
