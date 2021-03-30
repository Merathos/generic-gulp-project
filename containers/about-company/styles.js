import styled from 'styled-components';
import { TitleH2 } from 'elements';

export const Container = styled.section`
  position: relative;
  padding-top: 90px;

  @media screen and (max-width: 767px) {
    padding-top: 30px;
  }

  @media screen and (max-width: 767px) {
    padding-top: 14px;
    padding-bottom: 20px;
  }
`;

export const H2 = styled(TitleH2)`
  margin-bottom: 120px;
  margin-left: 120px;
  margin-right: 120px;

  @media screen and (max-width: 1360px) {
    margin-left: 60px;
    margin-right: 60px;
    margin-bottom: 90px;
  }

  @media screen and (max-width: 960px) {
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 60px;
  }

  @media screen and (max-width: 767px) {
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 50px;
  }
`;
