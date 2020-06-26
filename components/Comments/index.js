import styled from 'styled-components';
import PropTypes from 'prop-types';
import Comment from 'components/Comment';

const Section = styled.section`
  margin-bottom: 160px;
`;

const Comments = props => {
  const { data } = props;
  return (
    <Section>
      <Comment position="flex-start" data={data[0]} />
      <Comment position="flex-end" data={data[1]} />
    </Section>
  );
};

Comments.propTypes = {
  data: PropTypes.array.isRequired
};

export default Comments;
