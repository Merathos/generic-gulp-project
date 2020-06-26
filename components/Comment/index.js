import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from 'elements/Text';
import TitleH5 from 'elements/TitleH5';

const Block = styled.div`
  display: flex;
  align-items: ${props => props.align || 'flex-start'};
  flex-direction: column;
  margin-bottom: 14px;
`;

const Card = styled.div`
  background: linear-gradient(0deg, #f7f8f9, #f7f8f9), #201f2a;
  padding: 40px;
  border-radius: 12px;
`;

const Img = styled.img`
  width: 49px;
  margin-right: 14px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

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
        <Text content={text} />
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
