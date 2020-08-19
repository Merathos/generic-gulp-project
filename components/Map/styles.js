import styled from 'styled-components';
import { TitleH2 } from 'elements';

export const H2 = styled(TitleH2)`
  margin-bottom: 75px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 40px;
  }
`;

export const Container = styled.div`
  height: 460px;

  @media screen and (max-width: 1024px) {
    height: 200px;
  }
`;