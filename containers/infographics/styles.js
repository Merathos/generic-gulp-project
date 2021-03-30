import styled from 'styled-components';
import { TitleH2 } from 'elements';

export const Container = styled.section`
  padding-top: 160px;
  padding-left: 120px;

  @media screen and (max-width: 1360px) {
    padding-top: 120px;
    padding-left: 60px;
  }

  @media screen and (max-width: 960px) {
    padding-top: 80px;
    padding-left: 40px;
    padding-right: 40px;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (max-width: 767px) {
    padding-top: 48px;
  }
`;

export const H2 = styled(TitleH2)`
  width: 80%;

  :not(:first-of-type) {
    margin-bottom: 120px;
  }

  @media screen and (max-width: 1360px) {
    font-size: 40px;
    width: 75%;

    :not(:first-of-type) {
      margin-bottom: 90px;
    }
  }

  @media screen and (max-width: 960px) {
    width: 82%;

    :not(:first-of-type) {
      margin-bottom: 60px;
    }
  }

  @media screen and (max-width: 767px) {
    hyphens: manual;
    font-size: 28px;

    :not(:first-of-type) {
      margin-bottom: 50px;
    }
  }
`;

export const InfographicsContainer = styled.div``;
