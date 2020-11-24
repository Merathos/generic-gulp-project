import styled from 'styled-components';
import { SectionGroup } from 'containers';

export const Main = styled.main`
  overflow: hidden;
`;

export const Container = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 96px 0 120px;

  @media screen and (max-width: 768px) {
    padding: 0 45px;
  }

  @media screen and (max-width: 420px) {
    padding: 0 30px;
  }
`;

export const ValuesSection = styled(SectionGroup)`
  margin-bottom: 140px;

  @media (min-width: 1023px) {
    background-image: url('backgrounds/about-values.svg');
    background-repeat: no-repeat;
    background-position: top 45px right;
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 70px;
  }
`;

export const GreyContainer = styled.div`
  background-color: #f7f8f9;
  background-repeat: no-repeat;
  background-position: 118% 298%;

  @media screen and (max-width: 420px) {
    background-size: 50% 50%;
    background-position: 150% 120%;
  }
`;

export const HeaderContainer = styled(GreyContainer)`
  background-image: url('backgrounds/about-header.svg');
  background-repeat: no-repeat;
  background-position: right 95%;

  @media (max-width: 1024px) {
    background-position: right -100px bottom 90px;
  }

  @media (max-width: 768px) {
    background-size: 250px;
    background-position: right -100px bottom 90px;
  }

  @media (max-width: 420px) {
    background-position: right -140px bottom 90px;
  }
`;
