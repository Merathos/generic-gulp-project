import styled from 'styled-components';
import PropTypes from 'prop-types';
import NoteLeft from '/components/NoteLeft';
import NoteRight from '/components/NoteRight';
import { Advert } from 'components';

const Container = styled.section`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Articles = props => {
  const { data, type } = props;
  return (
    <Container>
      {
        {
          'article': (
            <>
              <NoteLeft data={data[0]} />
              <NoteRight data={data[1]} />
            </>
          ),
          'vacancy': (
            <>
              <Advert data={data[0]} />
              <Advert data={data[1]} />
            </>
          )
        }[type]
      }
    </Container>
  );
};

Articles.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string
};

export default Articles;
