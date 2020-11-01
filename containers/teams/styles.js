import styled from 'styled-components';
import { TitleH2 } from 'elements';

export const Container = styled.div`
  padding: 165px 115px 220px 125px;

  @media screen and (max-width: 1024px) {
    padding: 100px 60px 80px;
  }

  @media screen and (max-width: 420px) {
    padding: 80px 30px 80px;
  }
`;

export const Title = styled(TitleH2)`
  margin-bottom: 120px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 60px;
  }

  @media screen and (max-width: 960px) {
    font-size: 40px;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 420px) {
    font-size: 28px;
    margin-bottom: 52px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 75px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 420px) {
    grid-gap: 44px;
  }
`;

export const ListItem = styled.li`
  display: flex;

  a {
    display: flex;
  }
`;
