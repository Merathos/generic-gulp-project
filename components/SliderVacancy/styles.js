import styled from 'styled-components';
import { Subtitle, TitleH2 } from 'elements';

export const Text = styled(Subtitle)`
  margin-bottom: 37px;

  @media screen and (max-width: 420px) {
    margin-bottom: 30px;
  }
`;

export const Element = styled.div`
  margin-right: 20px;
  width: 461px;
  padding-right: 130px;
  position: relative;
  box-sizing: border-box;
  flex-shrink: 0;

  &:before {
    content: '';
    position: absolute;
    width: 420px;
    height: 2px;
    background-color: #2f8ed9;
    top: 10px;
    right: 0;

    @media (max-width: 420px) {
      width: 228px;
    }
  }

  @media screen and (max-width: 420px) {
    margin-right: 15px;
    padding-right: 30px;
    width: 255px;
  }
`;

export const Section = styled.div`
  position: relative;
  width: 100%;
  padding: 160px 0;
  padding-bottom: 55px;

  .swiper-container {
    overflow: visible;
  }

  @media screen and (max-width: 420px) {
    width: 320px;
    padding: 80px 0;
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
  background-color: ${props => props.background || '#fff'};
  padding-right: 20px;
  width: 20px;

  @media screen and (max-width: 420px) {
    width: 301px;
    margin-right: 12px;
  }
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;
  margin-bottom: 16px;

  @media screen and (max-width: 420px) {
    font-size: 16px;
    line-height: 120%;
    margin-bottom: 8px;
  }
`;

export const H2 = styled(TitleH2)`
  max-width: 720px;
  margin-bottom: 100px;

  @media screen and (max-width: 420px) {
    margin-bottom: 30px;
  }
`;

export const PrevButton = styled.button`
  display: block;
  position: absolute;
  top: 183px;
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

  @media (max-width: 910px) {
    display: none;
  }
`;

export const NextButton = styled.button`
  display: block;
  position: absolute;
  top: 183px;
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

  @media (max-width: 910px) {
    display: none;
  }
`;
