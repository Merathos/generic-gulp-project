import styled, { css } from 'styled-components';
import { Container } from 'elements';

export const HeaderContainer = styled(Container)`
  padding-top: 200px;
  padding-bottom: 130px;
  position: relative;

  @media screen and (max-width: 767px) {
    padding-top: 110px;
    padding-bottom: 80px;
  }
`;

export const ContentContainer = styled(Container)`
  margin-bottom: 160px;

  *:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 80px;
  }
`;

export const GreyWrapper = styled.div`
  background-color: #f7f8f9;
  margin-bottom: 160px;

  ${(props) =>
    props.withBg &&
    css`
      background-image: url('/backgrounds/teams-header-bg.png');
      background-repeat: no-repeat;
      background-position: right 70%;

      @media screen and (max-width: 1360px) {
        background-image: none;
      }
    `};

  @media screen and (max-width: 960px) {
    padding-bottom: 0;
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 0;
    margin-bottom: 80px;
  }
`;

export const VacancySection = styled.div`
  background-image: url('/backgrounds/vacancy-category.svg');
  background-repeat: no-repeat;
  background-position: -150px 50%;
  padding-bottom: 120px;
  margin-bottom: 100px;

  @media screen and (max-width: 1360px) {
    background-size: 266px 294px;
    background-position: calc(100% + 85px) 100%;
  }

  @media screen and (max-width: 960px) {
    padding-bottom: 60px;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 80px;
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 0;
  }
`;

export const VacancyContainer = styled(Container)`
  position: relative;

  @media screen and (max-width: 767px) {
    overflow: hidden;
  }
`;
