import styled, { css } from 'styled-components';
import { Subtitle } from 'elements';

export const Text = styled(Subtitle)`
  margin-top: 10px;
  text-align: center;
  margin-bottom: 100px;
  font-size: 16px;
  line-height: 21px;

  b {
    font-weight: bold;
  }

  @media screen and (max-width: 767px) {
    margin-top: 5px;
    margin-bottom: 50px;
    font-size: 10px;
    line-height: 13px;
  }
`;

export const Section = styled.section`
  position: relative;
  max-width: ${(props) => (props.stretched ? 'none' : '850px')};

  &::before {
    content: '';
    position: absolute;
    width: 147px;
    height: 147px;
    border-radius: 50%;
    left: -75px;
    top: -75px;
    background-color: #f7f8f9;
    z-index: -1;
    display: ${(props) => (props.decoration ? 'block' : 'none')};
  }

  @media screen and (max-width: 767px) {
    &::before {
      width: 112px;
      height: 112px;
      left: -55px;
      top: -55px;
    }
  }

  ${(props) =>
    props.hasCircle &&
    css`
      @media screen and (min-width: 1000px) {
        &::after {
          content: '';
          position: absolute;
          width: 217px;
          height: 217px;
          border-radius: 50%;
          right: -108.5px;
          top: -108.5px;
          background-color: #f7f8f9;
          z-index: -5;
        }
      }
    `}

  img {
    margin-bottom: ${(props) => (props.caption ? '0' : '100px')};

    @media screen and (max-width: 767px) {
      margin-bottom: ${(props) => (props.caption ? '0' : '50px')};
    }
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  padding-top: ${(props) => (props.isAbout ? 63.7 : 49.5)}%;

  @media screen and (max-width: 767px) {
    padding-top: ${(props) => (props.isAbout ? 57.8 : 49.5)}%;
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;

    &:hover {
      .react-player__play-icon {
        transition: all 0.3 ease-in !important;
        border-color: transparent transparent transparent #339722 !important;
      }
    }

    .react-player__play-icon {
      transition: all 0.3s ease-in;
    }
  }

  .react-player__shadow {
    width: 89px !important;
    height: 89px !important;
    border-radius: 50% !important;
    background: none !important;
    background-color: #ffffff !important;

    @media screen and (max-width: 767px) {
      ${(props) =>
        props.isAbout &&
        css`
          width: 40px !important;
          height: 40px !important;
        `}
    }
  }

  .react-player__play-icon {
    border-color: transparent transparent transparent #53b443 !important;
    border-width: 11px 0 11px 13px !important;
    margin-left: 4px !important;

    @media screen and (max-width: 767px) {
      ${(props) =>
        props.isAbout &&
        css`
          border-width: 6px 0 6px 7px !important;
        `}
    }
  }

  .react-player__preview {
    outline: none;
  }
`;
