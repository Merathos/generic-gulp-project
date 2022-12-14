import styled from 'styled-components';
import { TitleH2, TitleH3 } from 'elements';

export const Section = styled.section``;

export const H2 = styled(TitleH2)`
  margin-bottom: 20px;
`;

export const H3 = styled(TitleH3)`
  margin-bottom: 20px;

  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 120%;

  transition: all 0.3s ease;

  a {
    color: #8f8f94;
    display: inline;

    &:hover,
    &:active {
      color: #339722;
      cursor: pointer;
    }
  }

  svg {
    margin-right: 10px;
  }
`;

export const Picture = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Clip = styled.div`
  width: 350px;
  height: 250px;
  overflow: hidden;
  position: relative;
  margin-bottom: 30px;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 235px;
  }
`;

export const Text = styled.p`
  max-width: 700px;
  font-size: 20px;
  line-height: 158%;

  a {
    display: inline;
    color: #53b443;
    transition: color 0.3s ease;

    &:hover,
    &:active {
      color: #339722;
    }
  }

  @media screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 158%;
  }
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  padding-top: 40px;
  flex-direction: row;
  flex-wrap: wrap;

  @media screen and (max-width: 767px) {
    padding-top: 0;
  }
`;

export const Element = styled.li`
  margin-right: 80px;
  margin-top: 60px;

  &:nth-child(2n) {
    margin-right: 0;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-right: 0;
  }
`;
