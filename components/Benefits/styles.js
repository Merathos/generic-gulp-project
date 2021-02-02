import styled from 'styled-components';
import { TitleH2 } from 'elements';

export const Section = styled.section`
  margin-bottom: 90px;
  padding-bottom: 160px;

  @media screen and (min-width: 1440px) {
    background: url('/backgrounds/relocation-benefits.png') no-repeat right
      890px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 80px;
    padding-bottom: 0;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  padding: 0 30px;
  margin: 0 auto;
`;

export const Title = styled(TitleH2)`
  margin-bottom: 120px;

  @media screen and (max-width: 724px) {
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

  @media screen and (max-width: 1370px) {
    padding-right: 0;
    margin-right: 0;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    row-gap: 50px;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
