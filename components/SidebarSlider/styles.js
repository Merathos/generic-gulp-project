import styled from 'styled-components';
import { TitleH4, Subtitle } from 'elements';

export const Article = styled.article`
  position: relative;
  background-image: url('/backgrounds/grey-square-sidebar.png');
  background-repeat: no-repeat;
  background-position: top right 10%;
  margin-bottom: 110px;
  width: 254px;
  cursor: grab;
  padding-top: 24px;

  &:active {
    cursor: grabbing;
  }

  @media screen and (max-width: 1360px) {
    background-position: 10% 0;
    background-size: 70px 65px;
    width: 100%;
    max-width: 854px;
    margin: 0 0 100px;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 50px;
  }
`;

export const Img = styled.img`
  max-width: 120px;
  margin-bottom: 30px;

  @media screen and (max-width: 1360px) {
    width: 74px;
    height: 74px;
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

export const H4 = styled(TitleH4)`
  margin-bottom: 12px;

  @media screen and (max-width: 1360px) {
    margin-bottom: 8px;
  }
`;

export const StyledLink = styled.button`
  width: 20px;
  height: 20px;
  margin-right: 20px;
`;

export const Arrows = styled.div`
  display: flex;

  @media screen and (max-width: 1360px) {
    padding-left: 94px;
  }
`;

export const Text = styled(Subtitle)`
  margin-bottom: 40px;
  @media screen and (max-width: 767px) {
    margin-bottom: 30px;
  }
`;

export const Element = styled.div`
  min-width: 254px;

  @media screen and (max-width: 1360px) {
    display: flex;
    /* justify-content: space-between; */
    min-width: 100%;
  }
`;
