import styled from 'styled-components';
import TitleH2 from '/elements/TitleH2';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  margin-bottom: 100px;

  @media screen and (max-width: 1280px) {
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

export const Block = styled.div`
  padding-left: 350px;
  position: relative;

  &::before {
    content: '';
    width: 313px;
    height: 532px;
    position: absolute;
    top: 10%;
    left: -10%;
    z-index: 2;
    background-image: url('/backgrounds/vacanccy-category.svg');
    background-repeat: no-repeat;
    background-position: center;
  }

  @media screen and (max-width: 1024px) {
    padding-left: 0;

    &::before {
      display: none;
    }
  }
`;

export const H2 = styled(TitleH2)`
  margin-bottom: 90px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 50px;
    padding-left: 0;
  }
`;

export const AdvertsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 90px;
  grid-row-gap: 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-column-gap: 30px;
  }
`;
