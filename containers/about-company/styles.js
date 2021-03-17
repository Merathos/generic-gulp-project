import styled from 'styled-components';
import { TitleH2 } from 'elements';

export const Container = styled.section`
  position: relative;
  padding-top: 90px;

  @media screen and (max-width: 720px) {
    padding-top: 30px;
  }

  @media screen and (max-width: 420px) {
    padding-top: 14px;
    padding-bottom: 20px;
  }
`;

export const H2 = styled(TitleH2)`
  margin-bottom: 120px;
  margin-left: 120px;
  margin-right: 120px;

  @media screen and (max-width: 1200px) {
    margin-bottom: 60px;
  }

  @media screen and (max-width: 1024px) {
    margin-left: 60px;
    margin-right: 60px;
  }

  @media screen and (max-width: 420px) {
    font-size: 28px;
    line-height: 130%;
    margin-bottom: 50px;
    margin-left: 30px;
    margin-right: 30px;
  }
`;

export const SliderWrapper = styled.div`
  padding-top: 165px;
  padding-bottom: 135px;
  position: relative;
  height: 430px;

  @media screen and (max-width: 960px) {
    padding-top: 70px;
  }

  @media screen and (max-width: 720px) {
    height: auto;
    padding-bottom: 0;
    padding-top: 30px;
  }

  @media screen and (max-width: 420px) {
    margin-left: 30px;
  }
`;
