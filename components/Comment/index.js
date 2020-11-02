import TitleH5 from 'elements/TitleH5';
import { Block, Container, Img, Card, Text } from './styles';

const Comment = props => {
  const {
    data: { imageUrl, title, describe }
  } = props;
  return (
    <Block>
      <Container>
        <Img
          src={`https://api.develop.dins.d.nimax.ru/${imageUrl}`}
          alt={title}
        />
        <TitleH5>{title}</TitleH5>
      </Container>
      <Card>
        <Text>{describe}</Text>
      </Card>
    </Block>
  );
};

export default Comment;
