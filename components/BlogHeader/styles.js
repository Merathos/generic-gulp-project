import styled from 'styled-components';
import { TitleH3, Text, Icon, Button } from 'elements';
import MagicQuadrant from 'public/images/about-magic-quadrant.svg';

export const Grid = styled.div`
  display: flex;
  padding-top: 240px;
  margin-bottom: 100px;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
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
  margin-bottom: 90px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 60px;
  }
`;

export const ListTitle = styled(TitleH3)`
  color: #2F8ED9;
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

export const Picture = styled.img`
  margin-left: 50px;
  @media screen and (max-width: 420px) {
    margin-left: 0;
  }
`;

export const Block = styled.div`
  position: relative;
  width: 340px;

  &::after {
    content: '';
    position: absolute;
    background-image: url('/backgrounds/our-people.svg');
    width: 330px;
    height: 330px;
    bottom: 40px;
    right: -200px;
    z-index: 2;
  }

  &:hover::after {
    animation: 1s ease infinite rotation;
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

    &::after {
      width: 120px;
      height: 120px;
      background-size: 120px 120px;
      bottom: 20px;
      right: 0;
  }
  }
`;