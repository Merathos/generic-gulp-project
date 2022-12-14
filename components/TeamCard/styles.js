import styled from 'styled-components';
import { TitleH3 } from 'elements';

export const Section = styled.a`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 100%;

  svg {
    path {
      transition: all 0.3s ease;

      :first-child {
        fill: white;
        stroke: #201f2a;
      }

      :last-child {
        fill: black;
        stroke: none;
      }
    }
  }

  &:hover {
    path:first-child {
      fill: #53b443;
      stroke: #53b443;
    }

    path:last-child {
      fill: #ffffff;
      stroke: #ffffff;
    }
  }

  &:active {
    path:first-child {
      fill: #339722;
      stroke: #339722;
    }

    path:last-child {
      stroke: #ffffff;
      fill: #ffffff;
    }
  }

  @media screen and (max-width: 767px) {
    margin-bottom: ${(props) => (props.isMain ? '0' : '10px')};
  }
`;

export const StyledText = styled.p`
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 40px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 158%;
  }
`;

export const H3 = styled(TitleH3)`
  margin-bottom: 18px;
  font-size: 24px;
  font-weight: 700;
  line-height: 120%;

  @media screen and (max-width: 767px) {
    margin-bottom: 6px;
    font-size: 16px;
  }
`;

export const Arrow = styled.span`
  display: flex;
  width: 38px;
  height: 38px;
  margin-top: auto;

  @media screen and (max-width: 767px) {
    width: 28px;
    height: 28px;
  }
`;

export const Picture = styled.img`
  margin-bottom: 30px;
  width: 100%;

  @media screen and (max-width: 960px) {
    margin-bottom: 20px;
  }
`;
