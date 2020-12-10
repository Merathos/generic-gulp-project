import styled from 'styled-components';
import { TitleH3 } from 'elements';
import { Icon } from '../Features/styles';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  transition: all 0.3s ease;

  svg,
  path {
    transition: all 0.3s ease;
  }

  &:hover {
    color: #53b443;
    cursor: pointer;
  }

  &:hover svg {
    fill: #53b443;

    path:first-child {
      stroke: #53b443;
    }

    path:last-child {
      fill: #ffffff;
      stroke: #ffffff;
    }
  }

  &:active {
    color: #339722;
  }

  &:active svg {
    fill: #339722;

    path:first-child {
      stroke: #339722;
    }

    path:last-child {
      stroke: #ffffff;
      fill: #ffffff;
    }
  }

  @media screen and (max-width: 1024px) {
    max-width: none;
  }
`;

export const Badge = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

export const IconWrapper = styled(Icon)`
  width: 26px;
  height: 26px;
  background-size: 90%;
  margin-right: 8px;

  @media screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
    background-size: 80%;
    margin-right: 4px;
  }
`;

export const Inscription = styled.p`
  font-size: 16px;
  line-height: 131%;
  color: #201f2a;
  opacity: 0.5;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const H3 = styled(TitleH3)`
  margin-bottom: 20px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    line-height: 130%;
    margin-bottom: 16px;
  }
`;

export const StyledText = styled.p`
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 52px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    margin-bottom: 24px;
    width: 94%;
    font-size: 14px;
    line-height: 152%;
  }
`;

export const Arrow = styled.span`
  display: flex;
  margin-top: auto;
  width: 38px;
  height: 38px;

  @media screen and (max-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;
