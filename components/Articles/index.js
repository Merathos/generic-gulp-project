import styled from 'styled-components';
import PropTypes from 'prop-types';
import Note from 'components/Note';

const Container = styled.section`
  display: flex;
`;

const Articles = props => {
  const { data } = props;
  return (
    <Container>
      <Note position="left" data={data[0]} />
      <Note position="right" data={data[1]} />
    </Container>
  );
};

Articles.propTypes = {
  data: PropTypes.shape.isRequired
};

export default Articles;
