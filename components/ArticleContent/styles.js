import styled from 'styled-components';
import { TitleH2, TitleH3 } from 'elements';

export const H2 = styled(TitleH2)`
  padding-top: 60px;
  margin-bottom: 40px;

  @media screen and (max-width: 420px) {
    padding-top: 30px;
    margin-bottom: 30px;
  }
`;

export const H3 = styled(TitleH3)`
  margin-bottom: 30px;

  @media screen and (max-width: 420px) {
    margin-bottom: 10px;
  }
`;
