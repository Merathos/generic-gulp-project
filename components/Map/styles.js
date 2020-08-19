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

export const Wrapper = styled.p`
  margin-bottom: 30px;
  font-size: 20px;
  line-height: 158%;
`;

export const Place = styled.span`
  margin-right: 20px;
  opacity: 0.5;
`;