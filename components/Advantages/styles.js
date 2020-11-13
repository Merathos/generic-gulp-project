import styled from 'styled-components';
import { TitleH2 } from 'elements';

export const Title = styled(TitleH2)`
  padding-top: 100px;
  margin-bottom: 120px;

  @media screen and (max-width: 724px) {
    margin-bottom: 60px;
    padding-top: 50px;
    font-size: 40px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-gap: 80px;
  grid-template-columns: 1fr 1fr 1fr;
  padding-bottom: 160px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    padding-bottom: 30px;
  }

  @media screen and (max-width: 724px) {
    grid-template-columns: 1fr;
  }
`;
