import styled from 'styled-components';

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
    padding-top: 10px;
  }
`;

export const ConditionsSection = styled.div`
  background-image: url('/backgrounds/conditions.svg');
  background-repeat: no-repeat;
  background-position: calc(100% + 110px) 0%;
  padding-top: 60px;
  margin-bottom: ${(p) => (p.addMarginBottom ? '160px' : '0')};

  @media screen and (max-width: 1110px) {
    background-size: 270px 280px;
  }

  @media screen and (max-width: 768px) {
    background-size: 113px 123px;
    background-position: calc(100% + 65px) 0%;
  }

  @media screen and (max-width: 420px) {
    padding-top: 30px;
    margin-bottom: ${(p) => (p.addMarginBottom ? '80px' : '0')};
  }
`;

export const Container = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 1290px;
  margin: 0 auto;
  padding: 0 45px;
  position: relative;
  /* overflow: hidden; */

  @media screen and (max-width: 768px) {
    padding: 0 30px;
  }

  @media screen and (max-width: 420px) {
    max-width: 375px;
    padding: 0 30px;
  }

  @media screen and (max-width: 340px) {
    max-width: 320px;
    padding: 0 20px;
  }
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
  margin: 0 auto;
  padding: 0 45px;

  @media screen and (max-width: 420px) {
    max-width: 375px;
    padding: 0 30px;
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
