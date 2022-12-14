import styled, { css } from 'styled-components';
import { Subtitle } from 'elements';

export const Section = styled.section`
  margin-bottom: 100px;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  .swiper-container {
    padding-left: 30px;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 110px;
    width: 100%;

    .swiper-container {
      margin-left: 30px;
      padding-left: 0;
    }
  }

  ${(p) =>
    p.controlsTop &&
    css`
      margin-bottom: 144px;
      @media screen and (max-width: 767px) {
        margin-bottom: 72px;
      }
    `}
`;

export const Element = styled.div`
  margin-bottom: 16px;
  margin-right: 40px;
  text-align: center;

  &:first-child {
    padding-left: 30px;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 8px;
    margin-right: 16px;

    &:first-child {
      padding-left: 0;
    }
  }
`;

export const Img = styled.img`
  height: 405px;
  width: auto;

  @media screen and (max-width: 960px) {
    height: 360px;
  }

  @media screen and (max-width: 767px) {
    height: 232px;
  }

  @media screen and (max-width: 500px) {
    width: 315px;
    max-width: 84vw;
    object-fit: cover;
  }

  @media screen and (max-width: 350px) {
    max-width: 78vw;
    height: 180px;
    width: auto;
  }
`;

export const Title = styled.p`
  opacity: 0.5;
  margin-top: 10px;
  font-size: 16px;
  line-height: 21px;
  text-align: left;
  max-width: 706px;
  width: 90%;

  @media screen and (max-width: 767px) {
    margin-top: 6px;
    font-size: 14px;
    line-height: 18px;
  }
`;

export const Text = styled(Subtitle)`
  margin-top: 20px;
  text-align: center;
  margin-bottom: 100px;

  @media screen and (max-width: 767px) {
    margin-top: 5px;
    margin-bottom: 100px;
  }
`;

export const PrevButton = styled.button`
  display: block;
  position: absolute;
  bottom: 76px;
  right: 521px;
  width: 53px;
  height: 106px;
  padding-left: 19px;
  padding-top: 7px;
  border-radius: 108px 0 0 108px;
  border: 2px solid #53b443;
  border-right: none;

  ${(props) =>
    props.controlsTop &&
    css`
      top: 0;
      left: 115px;
    `}

  ${(props) =>
    !props.controlsTop &&
    css`
      @media screen and (max-width: 1440px) {
        right: auto;
        left: 866px;
      }

      @media screen and (max-width: 1360px) {
        left: auto;
        right: 283px;
      }
    `}

  svg {
    transition: fill 0.3s ease;
    fill: #53b443;

    &:hover,
    &:active {
      fill: #339722;
    }
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NextButton = styled.button`
  display: block;
  position: absolute;
  bottom: 76px;
  right: 468px;
  width: 53px;
  height: 106px;
  padding-left: 13px;
  padding-top: 7px;
  border-radius: 0 108px 108px 0;
  border: 2px solid #53b443;
  border-left: none;

  ${(props) =>
    props.controlsTop &&
    css`
      top: 0;
      left: 168px;
    `}

  ${(props) =>
    !props.controlsTop &&
    css`
      @media screen and (max-width: 1440px) {
        right: auto;
        left: 919px;
      }

      @media screen and (max-width: 1360px) {
        left: auto;
        right: 230px;
      }
    `}

  svg {
    transition: fill 0.3s ease;
    fill: #53b443;

    &:hover,
    &:active {
      fill: #339722;
    }
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
