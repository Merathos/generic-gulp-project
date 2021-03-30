import styled from 'styled-components';
import { TitleH2 } from 'elements';

export const Container = styled.div`
  padding-top: 160px;
  padding-bottom: 30px;
  padding-left: 120px;
  padding-right: 120px;

  @media screen and (max-width: 1360px) {
    padding-top: 120px;
    padding-bottom: 0;
    padding-left: 60px;
    padding-right: 60px;
  }

  @media screen and (max-width: 960px) {
    padding-top: 80px;
    padding-left: 40px;
    padding-right: 40px;
  }

  @media screen and (max-width: 767px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const Title = styled(TitleH2)`
  margin-bottom: 35px;
  font-size: 60px;
  line-height: 100px;

  @media screen and (max-width: 767px) {
    font-size: 32px;
    line-height: 134%;
    margin-bottom: 20px;
  }
`;
