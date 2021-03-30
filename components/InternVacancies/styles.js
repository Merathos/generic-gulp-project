import styled from 'styled-components';
import { TitleH2 } from 'elements';

export const Title = styled(TitleH2)`
  padding-top: 100px;
  margin-bottom: 124px;

  @media screen and (max-width: 767px) {
    margin-bottom: 52px;
    padding-top: 50px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 80px;
  margin-bottom: 90px;

  @media screen and (max-width: 1360px) {
    grid-template-columns: 1fr 1fr;
    max-width: 840px;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 40px;
    margin-bottom: 60px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: stretch;

  @media screen and (max-width: 767px) {
    &:nth-of-type(2),
    &:nth-of-type(3) {
      display: none;
    }
  }
`;
