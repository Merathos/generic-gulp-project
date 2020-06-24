import styled from 'styled-components';
import PropTypes from 'prop-types';
import NoteLeft from '/components/NoteLeft';
import NoteRight from '/components/NoteRight';

const Container = styled.section`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 420px) {
    flex-wrap: wrap;
  }
`;

const Articles = props => {
  const { data } = props;
  return (
    <Container>
      <NoteLeft data={data[0]} />
      <NoteRight data={data[1]} />
    </Container>
  );
};

Articles.propTypes = {
  data: PropTypes.shape.isRequired
};

export default Articles;
