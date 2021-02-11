import styled, { css } from 'styled-components';
import { Subtitle, TitleH2 } from 'elements';

export const Text = styled(Subtitle)`
  margin-bottom: 35px;
  white-space: pre-wrap;

  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const Duration = styled(Subtitle)`
  color: #2f8ed9;
  opacity: 1;
`;

export const Element = styled.div`
  margin-right: 20px;
  width: 470px;
  padding-right: 120px;
  position: relative;
  box-sizing: border-box;
  flex-shrink: 0;

  &:last-of-type {
    margin-right: 0;
  }

  &:before {
    content: '';
    position: absolute;
    width: 420px;
    height: 2px;
    background-color: #2f8ed9;
    top: 10px;
    right: 10px;

    @media screen and (max-width: 768px) {
      width: 228px;
      right: 0;
      top: 6px;
    }
  }

  @media screen and (max-width: 768px) {
    margin-right: 15px;
    padding-right: 30px;
    width: 255px;
  }
`;

export const Section = styled.div`
  position: relative;
  width: 100%;
  margin-top: 160px;
  margin-bottom: 120px;
  background-color: #f7f8f9;

  .swiper-container {
    overflow: visible;
  }

  @media screen and (max-width: 768px) {
    padding: 80px 0 34px;
  }
`;

export const Number = styled.span`
  display: block;
  font-weight: 800;
  font-size: 18px;
  line-height: 120%;
  color: #2f8ed9;
  z-index: 444;
  margin-bottom: 40px;
  background-color: #f7f8f9;
  padding-right: 20px;
  width: 20px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 34px;
  }
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;
  margin-bottom: 22px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 120%;
    margin-bottom: 8px;
  }
`;

export const H2 = styled(TitleH2)`
  max-width: 720px;
  margin-bottom: 100px;

  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const PrevButton = styled.button`
  display: block;
  position: absolute;
  top: 23px;
  right: 148px;
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
    fill: #53b443;
  }

  /* @media screen and (max-width: 1200px) {
    right: 53px;
  } */

  @media screen and (max-width: 1024px) {
    display: none;
  }

  ${(p) =>
    p.hideArrows &&
    css`
      visibility: hidden;
    `}
`;

export const NextButton = styled.button`
  display: block;
  position: absolute;
  top: 23px;
  right: 95px;
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
    fill: #53b443;
  }

  /* @media screen and (max-width: 1200px) {
    right: 0;
  } */

  @media screen and (max-width: 1024px) {
    display: none;
  }

  ${(p) =>
    p.hideArrows &&
    css`
      visibility: hidden;
    `}
`;
