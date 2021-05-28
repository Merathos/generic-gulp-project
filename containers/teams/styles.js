import styled from 'styled-components';
import { TitleH2 } from 'elements';

export const Container = styled.div`
  padding-top: 160px;
  padding-bottom: 220px;
  padding-left: 120px;
  padding-right: 120px;

  @media screen and (max-width: 1360px) {
    padding-top: 120px;
    padding-bottom: 160px;
    padding-left: 60px;
    padding-right: 60px;
  }

  @media screen and (max-width: 960px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media screen and (max-width: 767px) {
    padding: 80px 30px 80px;
  }
`;

export const Title = styled(TitleH2)`
  margin-bottom: 120px;

  @media screen and (max-width: 1360px) {
    margin-bottom: 90px;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 50px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 75px;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const ListItem = styled.li`
  display: flex;

  a {
    display: flex;
  }
`;
