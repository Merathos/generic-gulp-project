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
  position: relative;

  &::before {
    content: '';
    width: 480px;
    height: 530px;
    position: absolute;
    top: 0;
    left: -30%;
    z-index: 2;
    background-image: url('backgrounds/vacancy-bottom.png');
  }

  @media screen and (max-width: 1024px) {
    padding-left: 0;
  }

  &::before {
    display: none;
  }
`;

const H2 = styled(TitleH2)`
  margin-bottom: 90px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 50px;
    padding-left: 0;
  }
`;

const AdvertsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;


const Cards = props => {
  const { data, type } = props;
  return (
    <Container>
      {data}
    </Container>
  );
};

Cards.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string
};

export default Cards;
