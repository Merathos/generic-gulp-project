import PropTypes from 'prop-types';
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
        <TitleH5 content={name} />
      </Container>
      <Card>
        <Text>{text}</Text>
      </Card>
    </Block>
  );
};

Comment.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
  position: PropTypes.string
};

Comment.defaultProps = {
  position: 'left'
};

export default Comment;
