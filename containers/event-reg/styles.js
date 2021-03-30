import styled, { css } from 'styled-components';
import { Container } from 'elements';

export const StyledContainer = styled(Container)`
  position: relative;

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
    right: -40px;
    animation: 45s linear infinite rotation;

    @media screen and (max-width: 1360px) {
      right: 0;
    }

    @media screen and (max-width: 900px) {
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

  ${(p) =>
    p.removeMarginBottom &&
    css`
      margin-bottom: 0;
      padding-bottom: 0;
    `}

  @media screen and (max-width: 900px) {
    padding-top: 56px;
    padding-bottom: 47px;

    ${(p) =>
      p.removeMarginBottom &&
      css`
        padding-bottom: 0;
      `}
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 0;
  }
`;
