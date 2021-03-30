import styled, { css } from 'styled-components';
import { Subtitle } from 'elements';

export const Section = styled.section`
  padding-top: 160px;
  background-color: ${(props) => props.background || '#F7F8F9'};
  overflow: hidden;

  ${(props) =>
    props.type === 'relocation' &&
    css`
      background-image: url('/backgrounds/relocation-footer.png');
      background-repeat: no-repeat;
      background-position: right 70%;

      @media screen and (max-width: 960px) {
        background-image: none;
      }
    `};

  ${(props) =>
    props.type === 'about' &&
    css`
      margin-top: 84px;
      background-image: url('/backgrounds/about-footer.svg');
      background-repeat: no-repeat;
      background-position: right 116%;

      @media screen and (max-width: 767px) {
        background-image: none;
      }
    `};

  @media screen and (max-width: 767px) {
    padding-top: 80px;
  }
`;

export const ListContainer = styled.div`
  @media screen and (min-width: 769px) {
    min-height: 300px;

    ${(props) =>
      props.background === 'transparent' &&
      css`
        background-image: url('/backgrounds/i-footer.svg');
        background-repeat: no-repeat;
        background-position: top right;
      `};
  }
`;

export const Title = styled.b`
  display: block;
  font-weight: bold;
  font-size: 50px;
  line-height: 120%;
  margin-bottom: 10px;

  @media screen and (max-width: 767px) {
    font-size: 22px;
    line-height: 134%;
    margin-bottom: 14px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  max-width: 1200px;
  padding: 0 120px;
  margin: 0 auto;

  @media screen and (max-width: 1360px) {
    justify-content: space-between;
    padding: 0 60px;
  }

  @media screen and (max-width: 960px) {
    padding: 0 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
  }

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    grid-gap: 0;
    padding: 0 30px;
    max-width: 370px;
    margin: 0;
  }
`;

export const ListBlog = styled.ul`
  display: block;
  max-width: 1200px;
  padding: 0 120px;
  margin: 0 auto;
  margin-bottom: 130px;

  @media screen and (max-width: 1360px) {
    padding: 0 60px;
  }

  @media screen and (max-width: 960px) {
    padding: 0 40px;
  }

  @media screen and (max-width: 767px) {
    padding: 0 30px;
    margin-bottom: 0;
    max-width: 320px;
    margin: 0;
  }

  .swiper-container {
    overflow: visible;
  }
`;

export const Card = styled.li`
  margin-right: 80px;
  width: 349px;

  @media screen and (max-width: 767px) {
    width: 315px;
  }

  @media screen and (max-width: 767px) {
    margin-right: 10px;
  }

  &:last-child {
    margin-right: 0;

    @media screen and (max-width: 767px) {
      margin-right: 0;
    }
  }
`;

export const Text = styled(Subtitle)`
  margin-bottom: 25px;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 152%;
    margin-bottom: 16px;
  }
`;

export const Element = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 45px;
  max-width: 325px;
  flex-shrink: 0;
  cursor: pointer;

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
    color: #53b443;

    p {
      opacity: 1;
    }

    svg {
      fill: #53b443;

      path:first-child {
        fill: #53b443;
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

    p {
      opacity: 1;
    }

    svg {
      fill: #339722;

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

  &:not(:nth-child(3n)) {
    margin-right: 100px;
  }

  @media screen and (max-width: 1280px) {
    max-width: 45%;

    &:not(:nth-child(3n)) {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 960px) {
    max-width: 100%;
    margin-bottom: 0;
  }

  @media screen and (max-width: 767px) {
    max-width: none;
    margin-bottom: 50px;

    &:last-child {
      margin-bottom: 10px;
    }
  }
`;

export const ArrowWrapper = styled.div`
  margin-top: auto;

  @media screen and (max-width: 767px) {
    display: flex;
    width: 28px;
    height: 28px;
  }
`;
