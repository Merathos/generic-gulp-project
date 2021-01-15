import TitleH5 from 'elements/TitleH5';
import { Block, Container, Img, Card, Text } from './styles';

const Comment = props => {
  const {
    data: { imageUrl, title, describe },
  } = props;
  return (
    <Block>
      <Container>
        <Img background={`${process.env.NEXT_PUBLIC_API_STORAGE}${imageUrl}`} />
        <TitleH5 dangerouslySetInnerHTML={{ __html: title }} />
      </Container>
      <Card>
        <Text dangerouslySetInnerHTML={{ __html: describe }} />
      </Card>
    </Block>
  );
};

export default Comment;
