import styled, { css } from 'styled-components';
import { Subtitle } from 'elements';

export const Section = styled.section`
  padding-top: 160px;
  background-color: ${props => props.background || '#F7F8F9'};
  overflow: hidden;

  ${props =>
    props.type === 'relocation' &&
    css`
      background-image: url('backgrounds/relocation-footer.png');
      background-repeat: no-repeat;
      background-position: right 70%;

      @media screen and (max-width: 1024px) {
        background-image: none;
      }
    `};

  ${props =>
    props.type === 'about' &&
    css`
      margin-top: 84px;
      background-image: url('backgrounds/about-footer.svg');
      background-repeat: no-repeat;
      background-position: right 116%;

      @media screen and (max-width: 768px) {
        background-image: none;
      }
    `};

  @media screen and (max-width: 768px) {
    padding-top: 80px;
  }
`;

export const ListContainer = styled.div`
  @media (min-width: 769px) {
    min-height: 300px;

    ${props =>
      props.background === 'transparent' &&
      css`
        background-image: url('backgrounds/i-footer.svg');
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

  @media screen and (max-width: 768px) {
    font-size: 22px;
    line-height: 134%;
    margin-bottom: 14px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  max-width: 1200px;
  padding: 0 45px;
  margin: 0 auto;

  @media (max-width: 1280px) {
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 420px) {
    max-width: 375px;
    padding: 0 30px;
    flex-direction: column;
  }

  @media screen and (max-width: 240px) {
    max-width: 320px;
    padding: 0 20px;
  }
`;

export const ListBlog = styled.ul`
  display: block;
  max-width: 1200px;
  padding: 0 45px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    margin-bottom: 160px;
  }

  @media (max-width: 768px) {
    margin-bottom: 80px;
  }

  @media screen and (max-width: 420px) {
    max-width: 375px;
    padding: 0 30px;
  }

  @media screen and (max-width: 240px) {
    max-width: 320px;
    padding: 0 20px;
  }

  .swiper-container {
    overflow: visible;
  }
`;

export const Card = styled.li`
  margin-right: 80px;
  width: 349px;

  @media (max-width: 768px) {
    width: 315px;
  }

  @media screen and (max-width: 420px) {
    margin-right: 10px;
  }

  &:last-child {
    margin-right: 0;

    @media (max-width: 420px) {
      margin-right: 0;
    }
  }
`;

export const Text = styled(Subtitle)`
  margin-bottom: 25px;

  @media screen and (max-width: 420px) {
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
  transition: all 0.3s ease;
  cursor: pointer;

  svg {
    transition: all 0.3s ease;
  }

  &:hover {
    color: #53b443;

    p {
      opacity: 1;
    }

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

    p {
      opacity: 1;
    }

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

  &:not(:nth-child(3n)) {
    margin-right: 100px;
  }

  @media (max-width: 1280px) {
    max-width: 45%;

    &:not(:nth-child(3n)) {
      margin-right: 0;
    }
  }

  @media (max-width: 1024px) {
    max-width: 45%;
  }

  @media screen and (max-width: 768px) {
    max-width: none;
    margin-bottom: 50px;
  }
`;

export const ArrowWrapper = styled.div`
  margin-top: auto;

  @media screen and (max-width: 768px) {
    display: flex;
    width: 28px;
    height: 28px;
  }
`;
