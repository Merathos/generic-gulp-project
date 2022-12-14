import styled from 'styled-components';
import { Subtitle, TitleH4 } from 'elements';

export const Card = styled.div`
  position: relative;
  background-color: #f7f8f9;
  padding: 30px 30px 65px 85px;
  display: flex;
  box-sizing: border-box;
  background-image: url('/images/yellow-circle.svg');
  background-repeat: no-repeat;
  background-position: 40px bottom;
  min-height: 240px;
  height: 240px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  @media screen and (max-width: 1280px) {
    padding: 30px 15px 65px 60px;
  }

  @media screen and (max-width: 960px) {
    padding: 30px 30px 65px 85px;
  }

  @media screen and (max-width: 580px) {
    /* margin-bottom: 30px; */
    background-position: left 10px;
    padding: 30px 30px 40px;
    background-image: url('/images/blue-rectangle-mobile.svg');
    min-height: 0;
  }

  &:hover {
    color: #53b443;

    svg {
      fill: #53b443;

      path:first-child {
        stroke: #53b443;
      }

      path:last-child {
        stroke: #ffffff;
        fill: #ffffff;
      }
    }
  }

  &:active {
    color: #339722;

    svg {
      fill: #339722;

      path:first-child {
        stroke: #339722;
      }

      path:last-child {
        stroke: #ffffff;
        fill: #ffffff;
      }
    }
  }
`;

export const Img = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 30px;
  border-radius: 50%;
  object-fit: cover;

  @media screen and (max-width: 1280px) {
    margin-right: 20px;
  }

  @media screen and (max-width: 960px) {
    margin-right: 30px;
  }

  @media screen and (max-width: 580px) {
    width: 74px;
    height: 74px;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 25px;

  @media screen and (max-width: 580px) {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 0;
  }
`;

export const Wrapper = styled.div`
  max-width: 244px;
`;

export const StyledLink = styled.a`
  width: 38px;
  height: 38px;
  position: absolute;
  top: 30px;
  right: 30px;

  @media screen and (max-width: 580px) {
    margin-left: auto;
  }
`;

export const H4 = styled(TitleH4)`
  min-width: 175px;
`;

export const StyledSubtitle = styled(Subtitle)`
  margin-bottom: 8px;
`;
