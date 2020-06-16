import styled from 'styled-components';
import PropTypes from 'prop-types';
import Comment from 'components/Comment';

const Comments = props => {
  const { data } = props;
  return (
    <>
      <Comment position="left" data={data[0]} />
      <Comment position="right" data={data[1]} />
    </>
  );
};

Comments.propTypes = {
  data: PropTypes.shape.isRequired
};

export default Comments;
