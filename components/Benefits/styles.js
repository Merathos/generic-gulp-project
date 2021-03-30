import styled from 'styled-components';
import { TitleH2 } from 'elements';

export const Section = styled.section`
  margin-bottom: 90px;
  padding-bottom: 160px;
  background: url('/backgrounds/relocation-benefits.png') no-repeat right 100%;

  @media screen and (max-width: 960px) {
    background: none;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 80px;
    padding-bottom: 0;
  }
`;

export const Title = styled(TitleH2)`
  margin-bottom: 120px;

  @media screen and (max-width: 767px) {
    margin-bottom: 62px;
  }
`;

export const List = styled.ul`
  margin-right: -82px;
  width: 100%;
  display: grid;
  grid-gap: 30px;
  row-gap: 80px;
  justify-content: space-between;
  grid-template-columns: minmax(255px, 364px) minmax(255px, 364px) minmax(
      255px,
      364px
    );

  @media screen and (max-width: 1360px) {
    padding-right: 0;
    margin-right: 0;
  }

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 767px) {
    row-gap: 50px;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
