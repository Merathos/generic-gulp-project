import styled from 'styled-components';
import { TitleH3, Text, Icon, Button } from 'elements';
import MagicQuadrant from 'public/images/about-magic-quadrant.svg';

export const Grid = styled.div`
  display: flex;
  padding-top: 240px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding-top: 110px;
    padding-bottom: 80px;
  }
`;

export const Wrapper = styled.article`
  max-width: 854px;

  @media screen and (max-width: 420px) {
    margin-right: 0;
  }
`;

export const Aside = styled.aside`
  width: 254px;

  @media screen and (max-width: 420px) {
    width: 100%;
    margin-top: 80px;
  }
`;

export const Paragraph = styled(Text)`
  margin-bottom: 140px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 60px;
  }
`;

export const Features = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 100px;

  @media screen and (max-width: 420px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-gap: 30px;
    margin-bottom: 30px;
  }
`;

export const Logo = styled(MagicQuadrant)`
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 8px;
  }
`;

export const ListTitle = styled(TitleH3)`
  color: #2F8ED9;
  margin-bottom: 12px;

  @media screen and (max-width: 420px) {
    margin-bottom: 10px;
  }
`;

export const Element = styled.li`
  min-width: 300px;

  @media screen and (max-width: 1024px) {
    max-width: auto;
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

export const StyledButton = styled(Button)`
  margin-right: 40px;
  @media screen and (max-width: 1024px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const ButtonsWrapper = styled.div`
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Picture = styled.img`
  @media screen and (max-width: 420px) {
    margin-top: 30px;
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
    animation: 1.5s linear infinite rotation;
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