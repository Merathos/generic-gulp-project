import styled, { css } from 'styled-components';
import { TitleH4, TitleH5, Icon, Subtitle } from 'elements';

export const Title = styled(TitleH4)`
  margin-bottom: ${(props) => (props.isInternship ? '14px' : '40px')};
  font-weight: 700;

  @media screen and (max-width: 1205px) {
    grid-area: b;
    margin-bottom: 0;
  }

  @media screen and (max-width: 420px) {
    grid-area: b;
    margin-bottom: 0;
  }
`;

export const DefaultTitle = styled(TitleH4)`
  margin-bottom: 40px;

  @media screen and (max-width: 420px) {
    margin-bottom: 30px;
  }
`;

export const DefaultSubtitle = styled(Subtitle)`
  margin-bottom: 8px;
`;

export const H5 = styled(TitleH5)`
  margin-bottom: 12px;
  font-weight: 700;

  @media screen and (max-width: 420px) {
    ${(props) =>
      props.isInternship &&
      css`
        font-size: 14px;
        line-height: 131%;
        margin-bottom: 4px;
      `}
  }
`;

export const Section = styled.div`
  max-width: 250px;

  @media screen and (max-width: 420px) {
    margin-bottom: 50px;
  }
`;

export const SectionIcon = styled.div`
  max-width: 250px;

  @media screen and (max-width: 1024px) {
    ${(props) =>
      props.isInternship &&
      css`
        max-width: none;
      `}
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 50px;
  }
`;

export const SectionButton = styled.div`
  margin: 48px 0;

  @media screen and (max-width: 420px) {
    margin: 40px 0 60px;
  }
`;

export const Text = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;
  margin-bottom: 20px;

  @media screen and (max-width: 420px) {
    font-size: 12px;
    line-height: 120%;
  }
`;

export const StyledIcon = styled(Icon)`
  margin-bottom: 26px;

  ${(props) =>
    props.isInternship &&
    css`
      margin-top: 32px;
      width: 57px;
      height: 57px;
      background-size: 40%;

      @media screen and (max-width: 420px) {
        margin-top: 0;
        margin-bottom: 12px;
        width: 33px;
        height: 33px;
        background-size: 50%;
        background-color: #f7f8f9;
        border-radius: 50%;
      }
    `}
`;

export const StyledSubtitle = styled(Subtitle)`
  font-size: 16px;
  line-height: 134%;

  @media screen and (max-width: 500px) {
    font-size: 14px;
    line-height: 131%;
  }
`;

export const SubtitleWrapper = styled(Subtitle)`
  ${(props) =>
    props.isInternship &&
    css`
      @media screen and (max-width: 768px) {
        line-height: 148%;
      }
    `}
`;

export const Image = styled.img`
  width: 143px;
  margin-bottom: ${(props) => (props.isInternship ? '20px' : '30px')};
  position: relative;

  @media screen and (max-width: 1205px) {
    grid-area: a;
  }

  @media screen and (max-width: 500px) {
    width: 74px;
    grid-area: a;
  }
`;

export const Aside = styled.aside`
  padding-top: 30px;
  background-image: url('/backgrounds/i-sidebar.svg');
  background-repeat: no-repeat;
  background-position: top left 100px;

  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-areas:
      'a b'
      'a c';
    grid-column-gap: 20px;
    grid-row-gap: 8px;
  }

  @media screen and (max-width: 500px) {
    display: grid;
    grid-template-areas:
      'a b'
      'a c';
    grid-column-gap: 20px;
    grid-row-gap: 8px;
    background-position: top left 30px;
    background-size: 80px;
  }
`;

export const Content = styled.div`
  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    transition: all 0.3s ease;
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
