import styled from 'styled-components';
import { TitleH2 } from 'elements';

export const Section = styled.section`
  margin-bottom: 0;
  cursor: grab;
  overflow: hidden;

  &:active {
    cursor: grabbing;
    @media (max-width: 768px) {
      cursor: default;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 0;
    cursor: default;
  }
`;

export const Container = styled.div`
  position: relative;
  max-width: 1200px;
  padding: 0 30px;
  margin: 0 auto;

  &::before {
    @media (min-width: 911px) {
      content: '';
      position: absolute;
      top: 0;
      left: -1840px;
      width: 1870px;
      height: 100%;
      background-color: #ffffff;
      z-index: 500;
    }
  }

  .swiper-container {
    overflow: visible;
  }

  @media (max-width: 910px) {
    padding: 0;

    .swiper-wrapper {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Title = styled(TitleH2)`
  margin-bottom: 100px;

  @media (max-width: 910px) {
    margin-left: 30px;
  }

  @media (max-width: 768px) {
    margin-left: 30px;
    margin-bottom: 50px;
    font-size: 32px;
    letter-spacing: 0.01em;
  }
`;

export const PrevButton = styled.button`
  display: block;
  position: absolute;
  top: 35px;
  right: 314px;
  width: 53px;
  height: 106px;
  padding-left: 19px;
  padding-top: 7px;
  border-radius: 108px 0 0 108px;
  border: 2px solid #53b443;
  border-right: none;

  &:hover {
    svg {
      fill: #339722;
    }
  }

  svg {
    transition: fill 0.3s ease;
    fill: #53b443;
  }

  @media (max-width: 910px) {
    display: none;
  }
`;

export const NextButton = styled.button`
  display: block;
  position: absolute;
  top: 35px;
  right: 263px;
  width: 53px;
  height: 106px;
  padding-left: 13px;
  padding-top: 7px;
  border-radius: 0 108px 108px 0;
  border: 2px solid #53b443;
  border-left: none;

  &:hover {
    svg {
      fill: #339722;
    }
  }

  svg {
    transition: fill 0.3s ease;
    fill: #53b443;
  }

  @media (max-width: 910px) {
    display: none;
  }
`;

export const Element = styled.div`
  width: 862px;
  flex-shrink: 0;
  margin-right: 80px;

  @media (max-width: 910px) {
    margin-right: 0;
    margin-bottom: 40px;
    width: 100%;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
