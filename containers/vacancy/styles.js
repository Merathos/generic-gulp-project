import styled, { css } from 'styled-components';

export const VacancySection = styled.div`
  background-image: url('/backgrounds/vacancy-category.svg');
  background-repeat: no-repeat;
  background-position: -150px 50%;
  padding-bottom: 40px;

  @media screen and (max-width: 1110px) {
    background-size: 266px 294px;
    background-position: calc(100% + 85px) 100%;
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 0;
  }
`;

export const ConditionsSection = styled.div`
  background-image: url('/backgrounds/conditions.svg');
  background-repeat: no-repeat;
  background-position: calc(100% + 110px) 0%;
  padding-top: 60px;
  margin-top: -60px;

  @media screen and (max-width: 1110px) {
    background-size: 270px 280px;
  }

  @media screen and (max-width: 768px) {
    background-size: 113px 123px;
    background-position: calc(100% + 65px) 0%;
  }

  ${(p) =>
    p.whiteSpaceBottom &&
    css`
      @media screen and (max-width: 420px) {
        padding-bottom: 60px;
      }
    `}
`;

export const Container = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 1290px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 160px;
  padding: 0 45px;
  position: relative;
  /* overflow: hidden; */

  *:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 768px) {
    padding: 0 30px;
  }

  @media screen and (max-width: 420px) {
    max-width: 375px;
    padding: 0 30px;
    margin-bottom: 0px;
  }

  @media screen and (max-width: 340px) {
    max-width: 320px;
    padding: 0 20px;
  }

  ${(p) =>
    p.noMarginBottom &&
    css`
      @media screen and (max-width: 768px) {
        margin-bottom: 0;
      }
    `}
`;

export const GreyContainer = styled.div`
  background-color: #f7f8f9;
  overflow-x: hidden;
  margin-bottom: 160px;

  @media screen and (max-width: 420px) {
    margin-bottom: 80px;
  }
`;

export const SliderSection = styled.div`
  overflow: hidden;
`;

export const SliderContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 160px;
  padding: 0 45px;

  @media screen and (max-width: 420px) {
    max-width: 375px;
    padding: 0 30px;
    margin-bottom: 80px;
  }

  @media screen and (max-width: 340px) {
    max-width: 320px;
    padding: 0 20px;
  }

  div {
    background-color: #fff;
  }

  span {
    background-color: #fff;
  }
`;
