import styled from 'styled-components';
import { TitleH2 } from 'elements';

export const Title = styled(TitleH2)`
  padding-top: 100px;
  margin-bottom: 120px;
  @media screen and (max-width: 420px) {
    margin-bottom: 60px;
    padding-top: 50px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 87px;
  max-width: 840px;
  margin-bottom: 90px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-gap: 30px;
    margin-bottom: 60px;
  }
`;
