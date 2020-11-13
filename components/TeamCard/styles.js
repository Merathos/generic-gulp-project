import styled, { css } from 'styled-components';
import { TitleH3 } from 'elements';

export const Section = styled.div`
  max-width: ${props => (props.isMain ? '350px' : '380px')};
  transition: all 200ms ease;

  svg,
  path {
    transition: all 200ms ease;
  }

  ${props =>
    props.isMain &&
    css`
      display: flex;
      flex-direction: column;
    `}

  &:hover {
    svg {
      fill: #53b443;

      path:first-child {
        stroke: #53b443;
      }

      path:last-child {
        fill: #ffffff;
        stroke: #ffffff;
      }
    }
  }

  &:active {
    svg {
      fill: #339722;

      path:first-child {
        stroke: #339722;
      }
    }
  }

  @media screen and (max-width: 420px) {
    margin-bottom: ${props => (props.isMain ? '0' : '10px')};
  }
`;

export const StyledText = styled.p`
  font-size: 18px;
  line-height: 27px;
  margin-bottom: ${props => (props.isMain ? '40px' : '45px')};

  ${props =>
    props.isMain &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    `}

  @media screen and (max-width: 420px) {
    margin-bottom: ${props => (props.isMain ? '15px' : '20px')};
    font-size: 14px;
    line-height: ${props => (props.isMain ? '160%' : '152%')};
  }
`;

export const H3 = styled(TitleH3)`
  margin-bottom: 20px;

  ${props =>
    props.isMain &&
    css`
      margin-bottom: 18px;
      font-size: 24px;
      line-height: 120%;
    `}

  @media screen and (max-width: 420px) {
    margin-bottom: 6px;
    font-size: 16px;
  }
`;

export const ArrowRight = styled.span`
  display: flex;
  width: 38px;
  height: 38px;

  ${props =>
    props.isMain &&
    css`
      margin-top: auto;
    `};

  @media screen and (max-width: 420px) {
    ${props =>
      props.isMain &&
      css`
        width: 28px;
        height: 28px;
      `};
  }
`;

export const Picture = styled.img`
  margin-bottom: 30px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 20px;
  }
`;
