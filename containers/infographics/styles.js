import styled from 'styled-components';
import TitleH2 from '../../elements/TitleH2';

export const Container = styled.section`
  padding-top: 160px;
  padding-left: 120px;

  @media screen and (max-width: 1024px) {
    padding-top: 80px;
    padding-left: 60px;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (max-width: 420px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const H2 = styled(TitleH2)`
  width: 80%;

  :not(:first-of-type) {
    margin-bottom: 125px;
  }

  @media screen and (max-width: 960px) {
    font-size: 40px;
    :not(:first-of-type) {
      margin-bottom: 65px;
    }
  }

  @media screen and (max-width: 420px) {
    hyphens: manual;
    margin-left: 30px;
    margin-right: 30px;

    :not(:first-of-type) {
      margin-bottom: 60px;
    }
  }
`;

export const InfographicsContainer = styled.div``;
