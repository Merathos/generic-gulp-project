import styled, { css } from 'styled-components';
import { Container } from 'elements';

export const VacancySection = styled.div`
  background-image: url('/backgrounds/vacancy-category.svg');
  background-repeat: no-repeat;
  background-position: -150px 50%;
  padding-bottom: 40px;
  margin-bottom: -40px;

  @media screen and (max-width: 1360px) {
    background-size: 266px 294px;
    background-position: calc(100% + 85px) 100%;
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 0;
  }
`;

export const ConditionsSection = styled.div`
  background-image: url('/backgrounds/conditions.svg');
  background-repeat: no-repeat;
  background-position: calc(100% + 110px) 0%;
  padding-top: 60px;
  margin-top: -60px;

  @media screen and (max-width: 1360px) {
    background-size: 270px 280px;
  }

  @media screen and (max-width: 767px) {
    background-size: 113px 123px;
    background-position: calc(100% + 65px) 0%;
  }

  ${(p) =>
    p.whiteSpaceBottom &&
    css`
      @media screen and (max-width: 767px) {
        padding-bottom: 60px;
      }
    `}
`;

export const StyledContainer = styled(Container)`
  margin-bottom: 160px;
  position: relative;
  /* overflow: hidden; */

  *:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 80px;
  }

  ${(p) =>
    p.noMarginBottom &&
    css`
      margin-bottom: 0;

      @media screen and (max-width: 767px) {
        margin-bottom: 0;
      }
    `}

  ${(p) =>
    p.noMarginBottomMobile &&
    css`
      @media screen and (max-width: 767px) {
        margin-bottom: 0;
      }
    `}
`;

export const GreyContainer = styled.div`
  background-color: #f7f8f9;
  overflow-x: hidden;
  margin-bottom: 160px;

  @media screen and (max-width: 767px) {
    margin-bottom: 80px;
  }
`;

export const SliderSection = styled.div`
  overflow: hidden;
`;

export const SliderContainer = styled(Container)`
  width: 100%;
  margin-bottom: 160px;

  @media screen and (max-width: 767px) {
    margin-bottom: 80px;
  }

  @media screen and (max-width: 340px) {
    max-width: 320px;
  }

  div {
    background-color: #fff;
  }

  span {
    background-color: #fff;
  }
`;
