import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  padding: 0 45px 100px;
  margin: 0 auto;
  position: relative;

  @media screen and (max-width: 420px) {
    max-width: 375px;
    padding: 0 30px 80px;
    overflow: hidden;
  }

  @media screen and (max-width: 240px) {
    max-width: 320px;
    padding: 0 20px;
  }

  ${(p) =>
    p.removeBottomPadding &&
    css`
      padding: 0 45px 0;

      @media screen and (max-width: 420px) {
        padding: 0 30px 0;
      }
    `}
`;

export const GreyWrapper = styled.div`
  background-color: #f7f8f9;
  margin-bottom: 100px;

  ${(props) =>
    props.withBg &&
    css`
      background-image: url('/backgrounds/teams-header-bg.png');
      background-repeat: no-repeat;
      background-position: right 70%;

      @media screen and (max-width: 1200px) {
        background-image: none;
      }
    `};

  @media screen and (max-width: 1024px) {
    padding-bottom: 0;
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 50px;
    padding-bottom: 0;
  }
`;

export const VacancySection = styled.div`
  background-image: url('/backgrounds/vacancy-category.svg');
  background-repeat: no-repeat;
  background-position: -150px 50%;
  padding-top: 60px;
  padding-bottom: 100px;

  @media screen and (max-width: 1110px) {
    background-size: 266px 294px;
    background-position: calc(100% + 85px) 100%;
  }

  @media screen and (max-width: 420px) {
    padding-top: 40px;
  }
`;
