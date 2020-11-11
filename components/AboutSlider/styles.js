import styled, { css } from 'styled-components';
import Subtitle from 'elements/Subtitle';

export const Text = styled(Subtitle)`
  margin-top: 20px;
  text-align: center;
  margin-bottom: 100px;

  @media screen and (max-width: 420px) {
    margin-top: 5px;
    margin-bottom: 100px;
  }
`;

export const Element = styled.div`
  margin-bottom: 16px;
  text-align: center;

  @media screen and (max-width: 420px) {
    margin-bottom: 8px;
  }
`;

export const Section = styled.section`
  margin-bottom: 100px;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 50px;
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 706px;
  margin-right: 40px;

  @media screen and (max-width: 420px) {
    width: 301px;
    margin-right: 12px;
  }
`;

export const Title = styled.p`
  opacity: 0.5;
  margin-top: 20px;
`;

export const PrevButton = styled.button`
  display: none;
  display: block;
  position: absolute;
  bottom: 16.3%;
  left: 865px;
  width: 53px;
  height: 106px;
  padding-left: 19px;
  padding-top: 7px;
  border-radius: 108px 0 0 108px;
  border: 2px solid #53b443;
  border-right: none;

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
  display: none;
  display: block;
  position: absolute;
  bottom: 16.3%;
  left: 918px;
  width: 53px;
  height: 106px;
  padding-left: 13px;
  padding-top: 7px;
  border-radius: 0 108px 108px 0;
  border: 2px solid #53b443;
  border-left: none;

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
