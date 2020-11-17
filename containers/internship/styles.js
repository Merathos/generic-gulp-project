import styled from 'styled-components';
import { SectionGroup } from 'containers';
import { Application } from 'components';

export const Container = styled.section`
  max-width: 1200px;
  padding: 0 45px;
  margin: 0 auto;

  @media screen and (max-width: 420px) {
    max-width: 375px;
    padding: 0 30px;
    overflow: hidden;
  }

  @media screen and (max-width: 240px) {
    max-width: 320px;
    padding: 0 20px;
  }
`;

export const ValuesSection = styled(SectionGroup)`
  @media (min-width: 769px) {
    background-image: url('backgrounds/i-values.svg');
    background-repeat: no-repeat;
    background-position: top right;
  }
`;

export const VacancySection = styled(SectionGroup)`
  @media (min-width: 769px) {
    background-image: url('backgrounds/i-vacancy.svg');
    background-repeat: no-repeat;
    background-position: top 145px right;
  }
`;

export const GreyWrapper = styled.div`
  background-color: #f7f8f9;
  margin-bottom: 100px;
  padding-bottom: 240px;

  @media screen and (max-width: 1250px) {
    margin-bottom: 50px;
    padding-bottom: 0;
  }
`;

export const GreyContainer = styled.div`
  background-color: #f7f8f9;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: 118% 298%;

  @media screen and (max-width: 420px) {
    background-size: 50% 50%;
    background-position: 150% 120%;
  }
`;

export const StyledApplication = styled(Application)`
  h2 {
    max-width: 590px;
  }

  p {
    max-width: 570px;
  }

  button {
    margin-top: 75px;
  }

  @media (min-width: 769px) {
    background-image: url('backgrounds/i-application.svg');
    background-repeat: no-repeat;
    background-position: center right;
  }
`;
