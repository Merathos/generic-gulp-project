import styled from 'styled-components';
import { TitleH2 } from 'elements';

export const H2 = styled(TitleH2)`
  margin-bottom: 100px;

  @media screen and (max-width: 960px) {
    margin-bottom: 60px;
  }
`;

export const Section = styled.div`
  position: relative;

  @media screen and (max-width: 960px) {
    /* margin-bottom: 50px; */

    &::after {
      display: none;
    }
  }
`;
