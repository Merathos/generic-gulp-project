import styled from 'styled-components';
import { TitleH1 } from 'elements';

export const GreyHeader = styled.section`
  margin-bottom: 163px;
  background-color: #f7f8f9;
  padding-top: 210px;

  @media (max-width: 768px) {
    margin-bottom: 80px;
    padding-top: 115px;
  }
`;

export const Grid = styled.div`
  display: grid;
  overflow: hidden;
  grid-template-columns: 1fr 344px;
  grid-template-rows: max-content 1fr;
  grid-column-gap: 30px;
  grid-template-areas:
    'title pic'
    'content pic';
  max-width: 1200px;
  padding: 0 30px;
  padding-bottom: 100px;
  margin: 0 auto;

  & > * {
    align-self: flex-start;
  }

  @media (max-width: 1060px) {
    grid-template-areas:
      'title title'
      'content pic';
  }

  @media (max-width: 768px) {
    display: block;
    padding-bottom: 40px;
  }
`;

export const Title = styled(TitleH1)`
  grid-area: title;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const Content = styled.div`
  grid-area: content;
  max-width: 690px;
`;

export const Text = styled.p`
  font-size: 24px;
  line-height: 36px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 25px;
  }
`;

export const Features = styled.ul`
  margin-top: 110px;
  display: flex;
  flex-flow: row wrap;

  @media (max-width: 768px) {
    margin-top: 60px;
  }
`;

export const Item = styled.li`
  max-width: 220px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    max-width: 140px;
  }

  &:not(:last-child) {
    margin-right: 80px;

    @media (max-width: 768px) {
      margin-right: 35px;
    }
  }
`;

export const Icon = styled.div`
  margin-bottom: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 57px;
  height: 57px;
  border-radius: 50%;
  background-color: #ffffff;

  @media (max-width: 768px) {
    margin-bottom: 18px;
    width: 40px;
    height: 40px;
  }

  img {
    width: 24px;
    height: auto;

    @media (max-width: 768px) {
      width: 18px;
    }
  }
`;

export const PicContainer = styled.div`
  grid-area: pic;
  position: relative;
  max-width: 344px;

  @media (max-width: 768px) {
    margin: 0 auto;
    margin-bottom: 40px;
  }

  &::after {
    content: '';
    position: absolute;
    background-image: url('/backgrounds/relocate-letters.svg');
    background-repeat: no-repeat;
    background-position: center;
    width: 330px;
    height: 330px;
    bottom: -140px;
    left: -152px;
    z-index: 2;

    @media (max-width: 1130px) {
      width: 160px;
      height: 160px;
      background-size: 160px 160px;
      bottom: -60px;
      left: -43px;
    }

    @media (max-width: 768px) {
      left: initial;
      bottom: -55px;
      right: -43px;
    }
  }

  &:hover::after {
    animation: 3.8s linear infinite rotation;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  img {
    display: block;
    max-width: 344px;
    max-height: 489px;

    @media (max-width: 768px) {
      max-width: 315px;
      max-height: 319px;
      object-fit: cover;
    }
  }
`;
