import styled from 'styled-components';
import { Subtitle, TitleH4 } from 'elements';

export const Card = styled.div`
  position: relative;
  background-color: #f7f8f9;
  padding: 30px 30px 65px 84px;
  display: flex;
  box-sizing: border-box;
  justify-content: ${(props) => props.position || 'flex-start'};
  background-image: url('/images/blue-rectangle.svg');
  background-repeat: no-repeat;
  background-position: 20px bottom;
  min-height: 240px;
  height: 240px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  @media screen and (max-width: 1280px) {
    margin-bottom: 40px;
    padding: 30px 15px 65px 60px;
  }

  @media screen and (max-width: 960px) {
    padding: 30px 30px 65px 85px;
  }

  @media screen and (max-width: 580px) {
    display: none;
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

export const H4 = styled(TitleH4)`
  min-width: 175px;
  max-width: 244px;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
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
`;

export const Wrapper = styled.div`
  max-width: 244px;
`;

export const StyledLink = styled.a`
  width: 38px;
  height: 38px;
  position: absolute;
  top: 30px;
  left: 30px;
`;

export const StyledSubtitle = styled(Subtitle)`
  margin-bottom: 8px;
`;
