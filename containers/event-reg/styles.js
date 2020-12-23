import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 1200px;
  padding: 0 30px;
  margin: 0 auto;

  &::after {
    content: '';
    position: absolute;
    background-image: url('/backgrounds/form-bg.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 340px;
    height: 340px;
    top: -275px;
    right: -45px;
    animation: 45s linear infinite rotation;

    @media (max-width: 1370px) {
      right: 0;
    }

    @media (max-width: 900px) {
      width: 140px;
      height: 140px;
      background-size: 140px 140px;
      top: -130px;
      right: 15px;
    }
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Section = styled.section`
  margin-bottom: 160px;
  padding: 135px 0;
  padding-bottom: 160px;
  background-color: #f7f8f9;

  @media (max-width: 900px) {
    padding-top: 56px;
    padding-bottom: 47px;
  }
`;
