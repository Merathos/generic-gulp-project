import styled from 'styled-components';
import TitleH2 from '../../elements/TitleH2';

export const Section = styled.section`
  position: relative;
`;

export const Element = styled.div`
  display: flex;
  justify-content: space-between;
  flex: none;

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

export const TextWrapper = styled.div`
  width: 45%;

  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    margin-left: 30px;
    margin-right: 30px;
    width: calc(100% - 60px);
    height: 80%;
    margin-bottom: -15%;
  }
`;

export const Title = styled(TitleH2)`
  margin-top: 170px;
  margin-bottom: 30px;

  @media screen and (max-width: 1200px) {
    margin-top: 100px;
  }

  @media screen and (max-width: 960px) {
    font-size: 40px;
  }

  @media screen and (max-width: 900px) {
    margin-top: 60px;
  }

  @media screen and (max-width: 720px) {
    order: -1;
    margin-bottom: 20px;
    font-size: 32px;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  line-height: 134%;
  margin-bottom: 60px;

  @media screen and (max-width: 720px) {
    order: -1;
    font-size: 16px;
    line-height: 160%;
    margin-bottom: 30px;
  }
`;

export const Link = styled.a`
  order: -1;
  margin-top: 75px;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 700;
  line-height: 120%;
  color: #53b443;

  @media screen and (max-width: 720px) {
    margin-top: 0;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 160%;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin-top: 60px;
  margin-right: 20px;
  align-self: flex-end;

  &::after {
    content: '';
    position: absolute;
    background-image: url('/backgrounds/our-people.svg');
    width: 380px;
    height: 380px;
    bottom: 40px;
    left: -140px;
    z-index: 2;
    transform: rotate(270deg);

    @media screen and (max-width: 1360px) {
      width: 300px;
      height: 300px;
      bottom: 10px;
      left: -100px;
    }

    @media screen and (max-width: 800px) {
      width: 250px;
      height: 250px;
      bottom: 0;
      left: -60px;
    }

    @media screen and (max-width: 720px) {
      bottom: 110px;
      left: max(-100vw + 120px + 100%, -50px);
      width: 200px;
      height: 200px;
    }

    @media screen and (max-width: 600px) {
      bottom: 0;
      left: -100px;
    }
  }

  &:hover::after {
    animation: 1s ease-in-out rotation;
  }

  @keyframes rotation {
    0% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(630deg);
    }
  }

  @media screen and (max-width: 1200px) {
    margin-right: 0;
  }

  @media screen and (max-width: 720px) {
    margin-top: 0;
  }

  @media screen and (max-width: 420px) {
    height: 45%;
  }
`;

export const Img = styled.img`
  max-width: 600px;
  vertical-align: bottom;

  @media screen and (max-width: 1200px) {
    max-width: 430px;
  }

  @media screen and (max-width: 900px) {
    max-width: 350px;
  }

  @media screen and (max-width: 720px) {
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
  right: 40px;
  width: 53px;
  height: 106px;
  padding-left: 19px;
  padding-top: 6px;
  border-radius: 108px 0 0 108px;
  border: 2px solid #53b443;
  border-right: none;

  svg {
    fill: #53b443;
  }

  @media screen and (max-width: 900px) {
    top: 60px;
    right: 30px;
  }

  @media screen and (max-width: 720px) {
    top: -38px;
    left: -10px;
    border: none;
  }

  @media screen and (max-width: 600px) {
    top: -28px;
    left: 10px;
  }
`;

export const NextButton = styled.button`
  position: absolute;
  top: 170px;
  right: -13px;
  width: 53px;
  height: 106px;
  padding-left: 13px;
  padding-top: 10px;
  border-radius: 0 108px 108px 0;
  border: 2px solid #53b443;
  border-left: none;

  svg {
    fill: #53b443;
  }

  @media screen and (max-width: 900px) {
    top: 60px;
    right: -23px;
  }

  @media screen and (max-width: 720px) {
    top: -40px;
    left: 35px;
    border: none;
  }

  @media screen and (max-width: 600px) {
    top: -30px;
    left: 55px;
  }
`;
