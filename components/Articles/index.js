import styled from 'styled-components';
import PropTypes from 'prop-types';
import NoteLeft from '/components/NoteLeft';
import NoteRight from '/components/NoteRight';
import { Advert } from 'components';
import TitleH2 from '/elements/TitleH2';

const Container = styled.section`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Wrapper = styled.section`
  padding-left: 350px;


  /* @media screen and (max-width: 1024px) {
    flex-direction: column;
  } */
`;

const Articles = props => {
  const { data, type } = props;
  return (
    <Container>
      {type === 'article' ? (
        <>
          <NoteLeft data={data[0]} />
          <NoteRight data={data[1]} />
        </>
      ) : (
        <Wrapper>
          <TitleH2 content={data.title} />
          <Advert data={data.catalog[0]} />
          <Advert data={data.catalog[1]} />
        </Wrapper>
      )}
    </Container>
  );
};

Articles.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string
};

export default Articles;
