import styled from 'styled-components';
import { TitleH3, Text, Icon } from 'elements';

export const Grid = styled.div`
  display: flex;
  padding-top: 240px;
  margin-bottom: 100px;
  align-items: center;

  @media (max-width: 1600px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (max-width: 1024px) {
    padding-top: 110px;
    padding-bottom: 0;
    margin-bottom: 50px;
  }
`;

export const Wrapper = styled.article`
  max-width: 854px;
  padding-bottom: 100px;

  @media screen and (max-width: 420px) {
    margin-right: 0;
    padding-bottom: 0;
  }
`;

export const Paragraph = styled(Text)`
  margin-bottom: ${props => (props.audio ? '90px' : '0')};
  font-size: 24px;
  line-height: 36px;

  @media screen and (max-width: 1024px) {
    margin-bottom: ${props => (props.audio ? '60px' : '0')};
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 25px;
  }
`;

export const ListTitle = styled(TitleH3)`
  color: #2f8ed9;
  margin-bottom: 12px;
  white-space: nowrap;

  @media screen and (max-width: 420px) {
    margin-bottom: 10px;
  }
`;

export const Element = styled.li`
  @media screen and (max-width: 1024px) {
    display: flex;
  }
`;

export const StyledIcon = styled(Icon)`
  margin-bottom: 30px;
  @media screen and (max-width: 1024px) {
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

export const Picture = styled.img``;

export const Block = styled.div`
  margin-left: 50px;
  position: relative;
  box-sizing: border-box;
  width: 340px;

  @media (max-width: 1600px) {
    margin-top: 80px;
    margin-left: 0;
  }

  @media (max-width: 550px) {
    margin-top: 0;
  }

  @media (max-width: 420px) {
    margin-top: 50px;
    margin-left: 0;
  }

  &::after {
    content: '';
    position: absolute;
    background-image: url('/backgrounds/our-people.svg');
    width: 330px;
    height: 330px;
    bottom: 40px;
    right: -150px;
    z-index: 2;

    @media (max-width: 550px) {
      width: 120px;
      height: 120px;
      background-size: 120px 120px;
      bottom: 20px;
      right: 0;
    }
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

  @media screen and (max-width: 420px) {
    width: 100%;
  }
`;
