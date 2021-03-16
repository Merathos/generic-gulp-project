import styled from 'styled-components';
import TitleH2 from 'elements/TitleH2';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`;

export const Block = styled.div`
  margin-left: auto;
  max-width: 850px;
  position: relative;

  @media screen and (max-width: 1110px) {
    margin-left: 0;
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
