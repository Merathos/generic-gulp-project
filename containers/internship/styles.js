import styled, { css } from 'styled-components';
import { SectionGroup } from 'containers';
import { InternshipApplication } from 'components';
import { Container } from 'elements';

export const GreyWrapper = styled.div`
  background-color: #f7f8f9;
  margin-bottom: 100px;
  padding-bottom: 130px;

  ${(props) =>
    props.withPicture === false &&
    css`
      background: #f7f8f9 url('/backgrounds/internship-bg.png') no-repeat right
        top 40%;

      @media screen and (max-width: 767px) {
        background-image: none;
      }
    `};

  @media screen and (max-width: 767px) {
    margin-bottom: 46px;
    padding-bottom: 80px;
  }
`;

export const StyledContainer = styled(Container)`
  @media screen and (max-width: 767px) {
    overflow: hidden;
  }
`;

export const GroupContainer = styled.section`
  padding-top: 30px;
  margin-bottom: 100px;

  &:last-of-type {
    margin-bottom: 90px;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 52px;
  }

  @media screen and (max-width: 767px) {
    &:last-of-type {
      margin-bottom: 8px;
    }
  }
`;

export const ValuesSection = styled(SectionGroup)`
  padding-top: 86px;
  padding-bottom: 66px;

  ul {
    grid-gap: 88px 76px;
  }

  @media screen and (min-width: 860px) {
    background-image: url('/backgrounds/i-values.svg');
    background-repeat: no-repeat;
    background-position: top right;
  }

  @media screen and (max-width: 767px) {
    margin-top: -38px;
    padding-top: 0;
    padding-bottom: 30px;

    ul {
      grid-row-gap: 46px;
    }
  }
`;

export const VacancySection = styled(SectionGroup)`
  padding-bottom: 60px;

  @media screen and (min-width: 769px) {
    background-image: url('/backgrounds/i-vacancy.svg');
    background-repeat: no-repeat;
    background-position: top 160px right;
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 20px;
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 30px;
  }
`;

export const GreyContainer = styled.div`
  background-color: #f7f8f9;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: 118% 298%;
  padding-top: 160px;
  padding-bottom: 180px;

  @media screen and (max-width: 767px) {
    background-size: 50% 50%;
    background-position: 150% 120%;
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export const ApplicationSection = styled(InternshipApplication)`
  background-color: #f7f8f9;

  @media screen and (min-width: 769px) {
    background-image: url('/backgrounds/i-application.svg');
    background-repeat: no-repeat;
    background-position: center right;
  }
`;
