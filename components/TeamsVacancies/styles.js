import styled from 'styled-components';
import { TitleH2 } from 'elements';

export const Block = styled.div`
  margin-left: auto;
  max-width: 850px;
  position: relative;

  @media screen and (max-width: 1360px) {
    margin-left: 0;
  }
`;

export const H2 = styled(TitleH2)`
  margin-bottom: 90px;
  max-width: 733px;

  @media screen and (max-width: 960px) {
    margin-bottom: 50px;
    padding-left: 0;
  }
`;

export const AdvertsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 90px;
  grid-row-gap: 50px;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-column-gap: 30px;
  }
`;
