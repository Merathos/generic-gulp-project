import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from 'elements/Text';
import TitleH5 from 'elements/TitleH5';

const Block = styled.div`
  text-align: ${props => props.align || 'left'};
`;

const Card = styled.div`
  background: linear-gradient(0deg, #f7f8f9, #f7f8f9), #201f2a;
  padding: 40px;
`;

const Comment = props => {
  const {
    data: { img, text, name },
    position
  } = props;
  return (
    <Block align={position}>
      <img src={img} alt={name} />
      <TitleH5 content={text} />
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
