import styled, { css } from 'styled-components';
import { TitleH1, Btn, Text, Container } from 'elements';

export const SectionWrapper = styled.div`
  position: relative;
`;

export const Section = styled(Container)`
  padding-top: 200px;
  padding-bottom: 200px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1360px) {
    padding-bottom: 130px;
  }

  @media screen and (max-width: 767px) {
    padding-top: 110px;
    padding-bottom: 80px;
    & > div {
      min-width: 240px;
    }
  }

  @media screen and (max-width: 420px) {
    & > div {
      min-width: 210px;
    }
  }

  @media screen and (max-width: 340px) {
    max-width: 320px;
  }
`;

export const Content = styled.div`
  z-index: 1;
`;

export const TextBlock = styled.div`
  max-width: 627px;
  margin-bottom: 20px;
`;

export const Bold = styled.b`
  font-weight: 700;
  margin-right: 5px;
`;

export const Wrapper = styled.div`
  /* margin-top: 60px; */

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const StyledButton = styled(Btn)`
  margin-top: 40px;
`;

export const H1 = styled(TitleH1)`
  max-width: 870px;

  ${(p) =>
    p.addMarginTop &&
    css`
      margin-top: 60px;
    `}
`;

export const StyledText = styled(Text)`
  display: inline;
  position: relative;
  ${(props) =>
    props.withIcon &&
    css`
      svg {
        width: 38px;
        height: 38px;

        transition: all 0.3s ease;

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

        &:hover {
          color: #53b443;

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
          color: #339722;

          path:first-child {
            fill: #339722;
            stroke: #339722;
          }

          path:last-child {
            stroke: #ffffff;
            fill: #ffffff;
          }
        }
      }

      a {
        display: inline-block;
        position: relative;
        top: -3px;
        right: -14px;
        vertical-align: middle;
        height: 38px;
      }

      @media screen and (max-width: 767px) {
        svg {
          width: 26px;
          height: 26px;
        }

        a {
          height: 26px;
          top: -1px;
          right: -6px;
        }
      }
    `}
`;

export const Picture = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  max-width: 40vw;

  @media screen and (max-width: 767px) {
  }
`;
