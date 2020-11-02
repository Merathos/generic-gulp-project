import styled from 'styled-components';

export const Section = styled.section`
  cursor: pointer;
`;

export const Element = styled.div`
  position: relative;
  flex: none;
  align-self: flex-end;
  text-align: center;

  @media screen and (max-width: 420px) {
    align-self: flex-start;

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

  @media screen and (max-width: 720px) {
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
  background-color: ${props => (props.bgColor ? props.bgColor : `FB5235`)};
  color: ${props => (props.bgColor === '#FEB251' ? '#201F2A' : '#F7F8F9')};
  text-align: left;

  @media screen and (max-width: 1024px) {
    left: 60px;
    bottom: 30px;
    padding: 20px 25px 25px 20px;
  }

  @media screen and (max-width: 864px) {
    left: 40px;
  }

  @media screen and (max-width: 768px) {
    padding: 20px 25px 25px 20px;
  }

  @media screen and (max-width: 720px) {
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (max-width: 420px) {
    position: relative;
    margin-top: -10px;
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

  @media screen and (max-width: 864px) {
    font-size: 16px;
    line-height: 158%;
    padding-bottom: 10px;
  }
`;

export const Author = styled.span`
  font-size: 18px;
  line-height: 120%;
  opacity: 0.5;

  @media screen and (max-width: 864px) {
    font-size: 14px;
    line-height: 158%;
  }
`;

export const PrevButtonMain = styled.button`
  position: absolute;
  bottom: 520px;
  right: 130px;
  width: 53px;
  height: 106px;
  padding-left: 19px;
  padding-top: 7px;
  border-radius: 108px 0 0 108px;
  border: 2px solid #53b443;
  border-right: none;

  svg {
    transition: fill 0.3s ease;
    fill: #53b443;

    &:hover,
    &:active {
      fill: #339722;
    }
  }

  .inactive-slide & {
    display: none;

    @media screen and (max-width: 960px) {
      display: block;
    }
  }

  @media screen and (max-width: 960px) {
    top: 0;
    right: 10%;
    padding-top: 0;
    height: 16px;
    border: none;
  }

  @media screen and (max-width: 860px) {
    right: 20%;
  }

  @media screen and (max-width: 720px) {
    top: 4px;
    right: 52px;
  }
`;

export const NextButtonMain = styled.button`
  position: absolute;
  bottom: 520px;
  right: 78px;
  width: 53px;
  height: 106px;
  padding-left: 13px;
  padding-top: 10px;
  border-radius: 0 108px 108px 0;
  border: 2px solid #53b443;
  border-left: none;

  svg {
    transition: fill 0.3s ease;
    fill: #53b443;

    &:hover,
    &:active {
      fill: #339722;
    }
  }

  .inactive-slide & {
    display: none;

    @media screen and (max-width: 960px) {
      display: block;
    }
  }

  @media screen and (max-width: 960px) {
    top: 0;
    right: 2%;
    padding-top: 0;
    height: 16px;
    border: none;
  }

  @media screen and (max-width: 860px) {
    right: 12%;
  }

  @media screen and (max-width: 720px) {
    top: 4px;
    right: 8px;
  }
`;

export const PrevButton = styled.button`
  position: absolute;
  bottom: 85px;
  right: 130px;
  opacity: 0.5;
  transition: all 0.3s ease;

  svg {
    fill: #ffffff;
  }

  &:hover,
  &:active {
    opacity: 1;
  }

  .first-active-slide & {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    left: 320px;
    bottom: 65px;
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NextButton = styled.button`
  position: absolute;
  bottom: 85px;
  right: 90px;
  opacity: 0.5;
  transition: all 0.3s ease;

  svg {
    fill: #ffffff;
  }

  &:hover,
  &:active {
    opacity: 1;
  }

  .first-active-slide & {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    left: 360px;
    bottom: 65px;
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
