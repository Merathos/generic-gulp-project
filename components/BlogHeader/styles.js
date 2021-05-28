import styled from 'styled-components';
import { TitleH3, Text, Icon } from 'elements';

export const Grid = styled.div`
  display: flex;
  padding-top: 200px;
  align-items: flex-start;

  @media screen and (max-width: 1360px) {
    flex-direction: column;
  }

  @media screen and (max-width: 767px) {
    padding-top: 110px;
  }
`;

export const Wrapper = styled.article`
  width: 60%;
  max-width: 854px;
  padding-bottom: 90px;
  z-index: 1;

  @media screen and (max-width: 1360px) {
    width: 100%;
    max-width: 100%;
  }

  @media screen and (max-width: 767px) {
    margin-right: 0;
    padding-bottom: 40px;
  }
`;

export const Paragraph = styled(Text)`
  margin-bottom: ${(props) => (props.audio ? '90px' : '0')};
  font-size: 24px;
  line-height: 36px;

  @media screen and (max-width: 960px) {
    margin-bottom: ${(props) => (props.audio ? '60px' : '0')};
  }

  @media screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 25px;
  }
`;

export const ListTitle = styled(TitleH3)`
  color: #2f8ed9;
  margin-bottom: 12px;
  white-space: nowrap;

  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }
`;

export const Element = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
  }
`;

export const StyledIcon = styled(Icon)`
  margin-bottom: 30px;
  @media screen and (max-width: 960px) {
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

export const Picture = styled.img`
  display: flex;
`;

export const Block = styled.div`
  width: 40%;
  max-width: 500px;
  position: relative;
  box-sizing: border-box;
  margin-top: auto;

  @media screen and (max-width: 1600px) {
    margin-right: 50px;
    margin-left: 0;
  }

  @media screen and (max-width: 1280px) {
    width: 60%;
  }

  @media screen and (max-width: 550px) {
    width: 75%;
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
    bottom: 80px;
    right: -150px;
    z-index: 2;
    animation: 45s linear infinite rotation;

    @media screen and (max-width: 1600px) {
      right: -110px;
    }

    @media screen and (max-width: 1360px) {
      width: 260px;
      height: 260px;
      right: -130px;
    }

    @media screen and (max-width: 800px) {
      width: 200px;
      height: 200px;
      bottom: 40px;
      right: -100px;
    }

    @media screen and (max-width: 550px) {
      width: 120px;
      height: 120px;
      background-size: 120px 120px;
      bottom: 20px;
      right: -75px;
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
