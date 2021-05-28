import styled from 'styled-components';
import { TitleH3, Subtitle } from 'elements';

export const Img = styled.img`
  width: 404px;

  @media screen and (max-width: 960px) {
    width: 200px;
    margin-bottom: 20px;
  }
`;

export const Content = styled.div`
  margin-left: 70px;

  @media screen and (max-width: 960px) {
    margin-left: 0;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 158%;

  a {
    display: inline;
    color: #53b443;
    transition: color 0.3s;

    &:hover,
    &:active {
      color: #339722;
    }
  }

  b {
    font-weight: bold;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const Section = styled.section`
  max-width: 850px;
  display: flex;
  margin-bottom: 120px;
  align-items: flex-end;
  padding-top: 90px;

  picture {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      width: 179px;
      height: 179px;
      border-radius: 50%;
      right: -89px;
      top: -89px;
      background-color: #f7f8f9;
      z-index: -3;
      display: block;

      @media screen and (max-width: 767px) {
        width: 112px;
        height: 112px;
        right: -56px;
        top: -56px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 60px;
  }
`;

export const StyledSubtitle = styled(Subtitle)`
  margin-bottom: 10px;

  a {
    display: inline;
    color: #53b443;
    transition: color 0.3s;

    &:hover,
    &:active {
      color: #339722;
    }
  }

  b {
    font-weight: bold;
  }

  @media screen and (max-width: 960px) {
    margin-bottom: 7px;
  }
`;

export const H3 = styled(TitleH3)`
  margin-bottom: 20px;

  @media screen and (max-width: 960px) {
    margin-bottom: 10px;
  }
`;
