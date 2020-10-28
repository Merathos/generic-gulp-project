import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 1200px;
  padding: 0 30px;
  margin: 0 auto;

  &::after {
    @media (min-width: 900px) {
      content: '';
      position: absolute;
      background-image: url('/backgrounds/form-bg.svg');
      background-position: center;
      background-repeat: no-repeat;
      width: 420px;
      height: 420px;
      top: -275px;
      right: 0;
    }
  }

  &:hover::after {
    animation: 2.5s linear infinite rotation;
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

  @media (max-width: 768px) {
    padding-top: 56px;
    padding-bottom: 47px;
  }
`;
