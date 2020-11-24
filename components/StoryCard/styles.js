import styled from 'styled-components';
import { TitleH4 } from 'elements';

export const Wrapper = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #f7f8f9;
  padding: 40px 40px 0;
  width: 100%;
  max-width: 349px;
  box-sizing: border-box;
  min-height: 431px;

  &::after {
    content: '';
    position: absolute;
    background-image: url('/backgrounds/our-people.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 162px 162px;
    width: 162px;
    height: 162px;
    left: 25px;
    bottom: 65px;
    z-index: 2;
    transform: rotate(-90deg);

    @media (max-width: 768px) {
      background-size: 155px 155px;
      width: 155px;
      height: 155px;
      bottom: 55px;
      left: unset;
      right: 144px;
    }
  }

  &:hover::after {
    animation: 2s linear infinite rotation;
  }

  @keyframes rotation {
    0% {
      transform: rotate(-90deg);
    }
    100% {
      transform: rotate(270deg);
    }
  }

  @media (max-width: 768px) {
    max-width: 315px;
    min-height: 389px;
  }
`;

export const Title = styled(TitleH4)`
  margin-bottom: 30px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Date = styled.p`
  font-size: 16px;
  line-height: 21px;
  opacity: 0.5;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 21px;
  }
`;

export const Picture = styled.img`
  display: block;
  margin-top: auto;
  margin-left: auto;
  max-height: 254px;
  width: auto;

  @media (max-width: 768px) {
    max-height: 235px;
  }
`;
