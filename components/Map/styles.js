import styled from 'styled-components';
import { TitleH2 } from 'elements';

export const H2 = styled(TitleH2)`
  margin-bottom: 30px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 20px;
  }
`;

export const Container = styled.div`
  height: 460px;
  padding-top: 50px;

  @media screen and (max-width: 1024px) {
    height: 200px;
    padding-top: 20px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 60px;
  grid-gap: 60px;
`;

export const Wrapper = styled.div`
  margin-bottom: 30px;
`;