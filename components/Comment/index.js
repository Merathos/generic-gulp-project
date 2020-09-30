import TitleH5 from 'elements/TitleH5';
import { Block, Container, Img, Card, Text } from './styles';

const Comment = props => {
  const {
    data: { src, text, name },
    position
  } = props;
  return (
    <Block align={position}>
      <Container>
        <Img src={src} alt={name} />
        <TitleH5>{name}</TitleH5>
      </Container>
      <Card>
        <Text>{text}</Text>
      </Card>
    </Block>
  );
};

export default Comment;
