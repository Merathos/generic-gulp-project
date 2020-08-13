import { Subtitle } from 'elements';
import { Container, Span, Item } from './styles';

const Features = ({ data }) => (
  <Container>
    {data.map((el, i) => {
      if (el.flag) {
        return (
          <Item key={i}>
            <Span className={`ec ${el.icon}`} />
            <Subtitle>{el.title}</Subtitle>
          </Item>
        );
      }
      return false;
    })}
  </Container>
);

export default Features;
