import { TitleH5 } from 'elements';
import { sanitize } from 'isomorphic-dompurify';
import { Block, Container, Img, Card, Text } from './styles';

const Comment = (props) => {
  const {
    data: { imageUrl, title, describe },
  } = props;
  return (
    <Block>
      <Container>
        <Img background={`${process.env.NEXT_PUBLIC_API_STORAGE}${imageUrl}`} />
        <TitleH5 dangerouslySetInnerHTML={{ __html: sanitize(title) }} />
      </Container>
      <Card>
        <Text dangerouslySetInnerHTML={{ __html: sanitize(describe) }} />
      </Card>
    </Block>
  );
};

export default Comment;
