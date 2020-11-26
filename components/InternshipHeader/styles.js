import styled, { css } from 'styled-components';
import { Btn, TitleH1 } from 'elements';

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 200px;

  ${props =>
    props.withPicture === false &&
    css`
      position: relative;

      &:before {
        content: '';
        position: absolute;
        background-image: url('/backgrounds/letters-intern.png');
        background-repeat: no-repeat;
        width: 290px;
        height: 290px;
        bottom: -26px;
        right: -1%;
        z-index: 2;

        @media screen and (max-width: 1024px) {
          display: none;
        }
      }

      &:hover::before {
        animation: 2.6s linear infinite rotation;
      }

      @keyframes rotation {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `};

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    padding-top: 110px;
  }
`;

export const Wrapper = styled.article`
  max-width: 744px;
  padding-right: ${props => (props.withPicture ? '110px' : '0')};

  @media screen and (max-width: 1250px) {
    padding-right: ${props => (props.withPicture ? '60px' : '0')};
  }

  @media screen and (max-width: 1024px) {
    max-width: none;
    padding-right: 0;
  }
`;

export const Title = styled(TitleH1)`
  @media screen and (max-width: 1200px) {
    font-size: 64px;
  }

  @media screen and (max-width: 768px) {
    font-size: 32px;
    line-height: 134%;
    margin-bottom: 10px;
  }
`;

export const Block = styled.div`
  position: relative;
  align-self: flex-start;
  width: 344px;
  min-width: 260px;

  &::after {
    content: '';
    position: absolute;
    background-image: url('/backgrounds/letters-intern.png');
    background-repeat: no-repeat;
    width: 290px;
    height: 290px;
    bottom: -130px;
    left: -148px;
    z-index: 2;
  }

  &:hover::after {
    animation: 2.6s linear infinite rotation;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media screen and (max-width: 1200px) {
    &::after {
      width: 220px;
      height: 220px;
      bottom: -100px;
      left: -100px;
      background-size: 220px 220px;
    }
  }

  @media screen and (max-width: 1024px) {
    min-width: auto;

    &::after {
      bottom: -100px;
      left: auto;
      right: -100px;
    }
  }

  @media screen and (max-width: 768px) {
    align-self: center;
  }

  @media screen and (max-width: 600px) {
    &::after {
      width: 180px;
      height: 180px;
      background-size: 180px 180px;
      bottom: -80px;
      right: -60px;
    }
  }

  @media screen and (max-width: 420px) {
    &::after {
      bottom: -30px;
      right: -30px;
    }
  }

  ${props =>
    props.afterTitle === true &&
    css`
      display: none;

      @media screen and (max-width: 768px) {
        display: block;
        box-sizing: border-box;
        max-width: 315px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 110px;
      }

      @media screen and (max-width: 420px) {
        margin-bottom: 40px;
      }
    `}

  ${props =>
    props.afterTitle === false &&
    css`
      @media screen and (max-width: 768px) {
        display: none;
      }
    `}
`;

export const Picture = styled.img`
  @media screen and (max-width: 1024px) {
    margin-top: 78px;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 78px;
  font-size: 24px;
  line-height: 150%;

  @media screen and (max-width: 1024px) {
    margin-top: 78px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 60px;
    font-size: 16px;
    line-height: 158%;
  }

  @media screen and (max-width: 420px) {
    margin-top: 0;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: row;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const StyledButton = styled(Btn)`
  margin-right: 40px;
  border-color: #fb5235;

  &:hover {
    border-color: #ec381a;
  }

  @media screen and (max-width: 1200px) {
    margin-right: 0;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1024px) {
    margin-right: 40px;
  }
`;

export const Button = styled(Btn)`
  max-width: 236px;
`;
