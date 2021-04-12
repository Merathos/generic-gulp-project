import styled from 'styled-components';

export const Section = styled.section`
  cursor: pointer;
`;

export const Element = styled.div`
  position: relative;
  flex: none;
  align-self: flex-end;
  text-align: center;
  opacity: 0 !important;

  &.swiper-slide-active {
    opacity: 1 !important;
  }

  @media screen and (max-width: 420px) {
    ::after {
      content: '';
      position: absolute;
      bottom: -40px;
      left: 0;
      width: 420px;
      height: 120px;
      background-color: #ffffff;
    }
  }
`;

export const Img = styled.img`
  margin-right: 40px;
  vertical-align: bottom;

  @media screen and (max-width: 800px) {
    margin-right: 0;
  }

  @media screen and (max-width: 420px) {
    width: 315px;
  }
`;

export const QuoteBlock = styled.div`
  position: absolute;
  bottom: 58px;
  right: 50px;
  width: 57%;
  min-width: 270px;
  padding: 40px 45px 35px 40px;
  border-radius: 0 40px 40px 40px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : `FB5235`)};
  color: ${(props) => (props.bgColor === '#FEB251' ? '#201F2A' : '#F7F8F9')};
  text-align: left;

  @media screen and (max-width: 1024px) {
    left: 60px;
    bottom: 30px;
    padding: 20px 25px 25px 20px;
  }

  @media screen and (max-width: 864px) {
    left: 40px;
  }

  @media screen and (max-width: 800px) {
    left: 50%;
    transform: translateX(-50%);
    padding: 20px 25px 25px 20px;
  }

  @media screen and (max-width: 420px) {
    transform: none;
    margin: 0 auto;
    left: 0;
    position: relative;
    z-index: 2;
  }
`;

export const Quote = styled.p`
  font-size: 24px;
  line-height: 36px;
  margin-left: 3px;
  padding-bottom: 35px;
  max-height: 250px;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    line-height: 158%;
    padding-bottom: 10px;
  }
`;

export const Author = styled.span`
  font-size: 18px;
  line-height: 120%;
  opacity: 0.5;
  display: inline-block;
  max-width: 75%;

  @media screen and (max-width: 1024px) {
    font-size: 14px;
    line-height: 158%;
  }

  @media screen and (max-width: 800px) {
    max-width: 100%;
  }
`;

export const PrevButton = styled.button`
  position: absolute;
  bottom: 95px;
  right: 140px;
  width: 19px;
  height: 19px;
  opacity: 0.5;
  transition: opacity 0.3s ease;

  svg {
    fill: #ffffff;
  }

  &:hover,
  &:active {
    opacity: 1;
  }

  @media screen and (max-width: 1024px) {
    left: 330px;
    bottom: 60px;
  }

  @media screen and (max-width: 960px) {
    left: auto;
    right: 38%;
  }

  @media screen and (max-width: 800px) {
    bottom: auto;
    top: 50px;
    right: 16%;
    opacity: 1;

    svg {
      fill: #53b443;
    }

    &:hover,
    &:active {
      opacity: 0.6;
    }
  }

  @media screen and (max-width: 420px) {
    top: 2px;
    right: 18%;
  }
`;

export const NextButton = styled.button`
  position: absolute;
  bottom: 95px;
  right: 100px;
  width: 19px;
  height: 19px;
  opacity: 0.5;
  transition: opacity 0.3s ease;

  svg {
    fill: #ffffff;
  }

  &:hover,
  &:active {
    opacity: 1;
  }

  @media screen and (max-width: 1024px) {
    left: 370px;
    bottom: 60px;
  }

  @media screen and (max-width: 960px) {
    left: auto;
    right: 30%;
  }

  @media screen and (max-width: 800px) {
    bottom: auto;
    top: 50px;
    right: 8%;
    opacity: 1;

    svg {
      fill: #53b443;
    }

    &:hover,
    &:active {
      opacity: 0.6;
    }
  }

  @media screen and (max-width: 420px) {
    top: 2px;
    right: 8%;
  }
`;
