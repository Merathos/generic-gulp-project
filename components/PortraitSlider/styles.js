import styled from 'styled-components';

export const Section = styled.section`
  cursor: pointer;
`;

export const Element = styled.div`
  position: relative;
  display: flex;
  flex: none;
  align-self: flex-end;

  @media screen and (max-width: 420px) {
    padding-bottom: 56px;
  }
`;

export const Img = styled.img`
  margin-right: 40px;

  @media screen and (max-width: 720px) {
    margin-right: 0;
  }
`;

export const QuoteBlock = styled.div`
  position: absolute;
  bottom: 50px;
  right: 40px;
  width: 57%;
  min-width: 270px;
  padding: 40px 45px 30px 40px;
  border-radius: 0 40px 40px 40px;
  background-color: ${props => (props.bgColor ? props.bgColor : `FB5235`)};
  color: ${props => (props.bgColor === '#FEB251' ? '#201F2A' : '#F7F8F9')};

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

  @media screen and (max-width: 420px) {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Quote = styled.p`
  font-size: 24px;
  line-height: 36px;
  padding-bottom: 40px;

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
  bottom: 515px;
  right: 118px;
  width: 53px;
  height: 106px;
  padding-left: 19px;
  padding-top: 7px;
  border-radius: 108px 0 0 108px;
  border: 2px solid #53b443;
  border-right: none;

  svg {
    fill: #53b443;
  }

  .inactive-slide & {
    display: none;

    @media screen and (max-width: 420px) {
      display: block;
    }
  }

  @media screen and (max-width: 864px) {
    top: 10px;
  }

  @media screen and (max-width: 640px) {
    top: 30px;
  }

  @media screen and (max-width: 480px) {
    border: none;
  }

  @media screen and (max-width: 420px) {
    top: 30px;
    right: 78px;
    padding-top: 0;
    height: 16px;
  }
`;

export const NextButtonMain = styled.button`
  position: absolute;
  bottom: 515px;
  right: 65px;
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

  .inactive-slide & {
    display: none;

    @media screen and (max-width: 420px) {
      display: block;
    }
  }

  @media screen and (max-width: 864px) {
    top: 10px;
  }

  @media screen and (max-width: 640px) {
    top: 30px;
  }

  @media screen and (max-width: 480px) {
    border: none;
  }

  @media screen and (max-width: 420px) {
    top: 30px;
    right: 25px;
    padding-top: 0;
    height: 16px;
  }
`;

export const PrevButton = styled.button`
  position: absolute;
  bottom: 85px;
  right: 130px;

  svg {
    fill: #ffffff;
  }

  .first-active-slide & {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    left: 320px;
    bottom: 65px;
  }

  @media screen and (max-width: 960px) {
    left: 300px;
  }

  @media screen and (max-width: 864px) {
    left: 260px;
    bottom: 55px;
  }

  @media screen and (max-width: 420px) {
    display: none;
  }
`;

export const NextButton = styled.button`
  position: absolute;
  bottom: 85px;
  right: 90px;

  svg {
    fill: #ffffff;
  }

  .first-active-slide & {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    left: 360px;
    bottom: 65px;
  }

  @media screen and (max-width: 960px) {
    left: 340px;
  }

  @media screen and (max-width: 864px) {
    left: 300px;
    bottom: 55px;
  }

  @media screen and (max-width: 420px) {
    display: none;
  }
`;
