import styled from 'styled-components';
import { SectionGroup } from 'containers';

export const Main = styled.main`
  overflow: hidden;
`;

export const Container = styled.section`
  max-width: ${(p) => (p.header ? '1224px' : '1200px')};
  margin: 0 auto;
  padding-left: 120px;
  padding-right: ${(p) => (p.header ? '96px' : '120px')};

  @media screen and (max-width: 1360px) {
    padding-left: 60px;
    padding-right: 60px;
  }

  @media screen and (max-width: 960px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media screen and (max-width: 767px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const ValuesSection = styled(SectionGroup)`
  margin-bottom: 140px;
  padding-top: 70px;

  @media screen and (min-width: 1023px) {
    background-image: url('/backgrounds/about-values.svg');
    background-repeat: no-repeat;
    background-position: top 45px right;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 70px;
    padding-top: 34px;
  }
`;

export const GreyContainer = styled.div`
  background-color: #f7f8f9;
  background-repeat: no-repeat;
  background-position: 118% 298%;

  @media screen and (max-width: 767px) {
    background-size: 50% 50%;
    background-position: 150% 120%;
  }
`;

export const HeaderContainer = styled(GreyContainer)`
  background-image: url('/backgrounds/about-header.svg');
  background-repeat: no-repeat;
  background-position: right 95%;

  @media screen and (max-width: 960px) {
    background-position: right -100px bottom 90px;
  }

  @media screen and (max-width: 767px) {
    background-size: 250px;
    background-position: right -140px bottom 90px;
  }
`;
