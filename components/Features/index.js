import { Subtitle } from 'elements';
import { Container, Span, Item } from './styles';

const Features = ({ data }) => (
  <Container>
    {data.map((el, i) => (
      <Item key={i}>
        <Span className={`ec ${el.icon}`} />
        <Subtitle content={el.title} />
      </Item>
    ))}
  </Container>
);

export default Features;
