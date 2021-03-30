import styled from 'styled-components';
import { TitleH2 } from 'elements';

export const Section = styled.section`
  position: relative;
`;

export const Element = styled.div`
  display: flex;
  justify-content: space-between;
  flex: none;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const TextWrapper = styled.div`
  width: 45%;
  margin-bottom: 40px;

  @media screen and (max-width: 1360px) {
    width: 50%;
  }

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    box-sizing: border-box;
    height: 80%;
    margin-bottom: 0;
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    height: 60%;
    margin-bottom: -5%;
  }
`;

export const Title = styled(TitleH2)`
  margin-top: 172px;
  margin-bottom: 30px;

  @media screen and (max-width: 1360px) {
    margin-top: 100px;
  }

  @media screen and (max-width: 960px) {
    font-size: 40px;
    margin-top: 60px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 70px;
    margin-bottom: 20px;
    font-size: 32px;
    order: -1;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  line-height: 134%;
  margin-bottom: 60px;
  max-width: 90%;

  @media screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 158%;
    margin-bottom: 30px;
    order: -1;
  }
`;

export const Link = styled.a`
  order: -1;
  margin-top: 75px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 700;
  line-height: 120%;
  color: #53b443;
  transition: color 0.3s ease;

  &:hover {
    color: #339722;
  }

  @media screen and (max-width: 767px) {
    margin-top: 0;
    font-size: 14px;
    line-height: 160%;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin-top: 60px;
  margin-right: 40px;
  align-self: flex-end;

  @media screen and (max-width: 767px) {
    margin-top: 0;
    margin-right: 0;
  }

  @media screen and (max-width: 767px) {
    display: flex;
    align-items: flex-end;
    height: 55%;
  }

  &::after {
    content: '';
    position: absolute;
    background-image: url('/backgrounds/our-people.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 301px;
    height: 301px;
    bottom: 30px;
    left: -90px;
    z-index: 2;
    animation: 45s linear infinite rotation;

    @media screen and (max-width: 1360px) {
      width: 260px;
      height: 260px;
      bottom: 20px;
    }

    @media screen and (max-width: 960px) {
      width: 200px;
      height: 200px;
      left: max(-100vw + 120px + 100%, -50px);
    }

    @media screen and (max-width: 767px) {
      top: auto;
      bottom: 30px;
      left: max(-100vw + 120px + 100%, -50px);
    }

    @media screen and (max-width: 600px) {
      left: -100px;
    }

    @media screen and (max-width: 767px) {
      width: 180px;
      height: 180px;
      left: -70px;
      bottom: 30px;
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

export const Img = styled.img`
  max-width: 600px;
  vertical-align: bottom;

  @media screen and (max-width: 1360px) {
    max-width: 430px;
  }

  @media screen and (max-width: 960px) {
    max-width: 350px;
  }

  @media screen and (max-width: 767px) {
    max-height: 400px;
    width: auto;
  }

  @media screen and (max-width: 600px) {
    height: 270px;
    width: 218px;
    object-fit: cover;
    object-position: 50% 0;
  }
`;

export const PrevButton = styled.button`
  position: absolute;
  top: 170px;
  right: 53px;
  width: 53px;
  height: 106px;
  padding-left: 19px;
  padding-top: 6px;
  border-radius: 108px 0 0 108px;
  border: 2px solid #53b443;
  border-right: none;

  svg {
    fill: #53b443;
    transition: fill 0.3s ease;

    &:hover,
    &:active {
      fill: #339722;
    }
  }

  @media screen and (max-width: 960px) {
    top: 59px;
    right: 30px;
    border: none;
  }

  @media screen and (max-width: 767px) {
    top: -28px;
    left: 10px;
    background-color: transparent;
  }
`;

export const NextButton = styled.button`
  position: absolute;
  top: 170px;
  right: 0;
  width: 53px;
  height: 106px;
  padding-left: 13px;
  padding-top: 7px;
  border-radius: 0 108px 108px 0;
  border: 2px solid #53b443;
  border-left: none;

  svg {
    fill: #53b443;
    transition: fill 0.3s ease;

    &:hover,
    &:active {
      fill: #339722;
    }
  }

  @media screen and (max-width: 960px) {
    top: 58px;
    right: -23px;
    border: none;
  }

  @media screen and (max-width: 767px) {
    top: -30px;
    left: 55px;
    background-color: transparent;
  }
`;
