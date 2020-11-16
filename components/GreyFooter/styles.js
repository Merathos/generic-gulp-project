import styled, { css } from 'styled-components';
import { Subtitle } from 'elements';

export const Section = styled.section`
  padding-top: 160px;
  background-color: ${props => props.background || '#F7F8F9'};

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

  @media screen and (max-width: 420px) {
    padding-top: 80px;
  }
`;

export const ListContainer = styled.div`
  @media (min-width: 769px) {
    min-height: 300px;
    background-image: ${props =>
      props.type === 'relocation'
        ? `none`
        : `url('backgrounds/about-footer.svg')`};
    background-repeat: no-repeat;
    background-position: right top;

    ${props =>
      props.background === 'transparent' &&
      css`
        background-image: url('backgrounds/i-footer.svg');
      `};
  }
`;

export const Title = styled.b`
  display: block;
  font-weight: bold;
  font-size: 50px;
  line-height: 120%;
  margin-bottom: 10px;

  @media screen and (max-width: 420px) {
    font-size: 22px;
    line-height: 134%;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  max-width: 1200px;
  padding: 0 45px;
  margin: 0 auto;
  justify-content: space-between;

  @media (max-width: 1145px) {
    justify-content: flex-start;
  }

  @media (max-width: 820px) {
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
  display: flex;
  max-width: 1200px;
  padding: 0 45px;
  margin: 0 auto;

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

export const Card = styled.li`
  margin-right: 80px;

  @media screen and (max-width: 420px) {
    margin-right: 10px;
  }
`;

export const Text = styled(Subtitle)`
  margin-bottom: 25px;

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 152%;
  }
`;

export const Element = styled.li`
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
  }

  &:hover p {
    opacity: 1;
  }

  &:hover svg {
    fill: #53b443;

    path:first-child {
      stroke: #53b443;
    }

    path:last-child {
      stroke: #ffffff;
      fill: #ffffff;
    }
  }

  &:active {
    color: #339722;
  }

  &:active p {
    opacity: 1;
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

  &:not(:last-child) {
    margin-right: 40px;
  }

  @media screen and (max-width: 420px) {
    max-width: auto;
    margin-bottom: 45px;
  }
`;
