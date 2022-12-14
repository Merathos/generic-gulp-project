import styled from 'styled-components';
import { Subtitle } from 'elements';

export const Section = styled.section`
  padding-top: 160px;
  padding-bottom: 60px;
  background-color: #f7f8f9;
  background-image: url('/backgrounds/relocation-footer.png');
  background-repeat: no-repeat;
  background-position: right bottom;

  @media screen and (max-width: 960px) {
    background-image: none;
  }

  @media screen and (max-width: 767px) {
    padding-top: 80px;
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
    margin-bottom: 15px;
  }
`;

export const List = styled.ul`
  display: grid;
  max-width: 1187px;
  grid-gap: 97px;
  grid-template-columns: repeat(auto-fill, 330px);

  @media screen and (max-width: 767px) {
    grid-gap: 44px;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 330px));
  }
`;

export const Text = styled(Subtitle)`
  margin-bottom: 27px;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 152%;
  }

  @media screen and (max-width: 759px) {
    margin-bottom: 20px;
  }
`;

export const Element = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 330px;
  min-height: 207px;
  transition: all 0.3s ease;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    min-height: 155px;
  }

  @media screen and (max-width: 759px) {
    min-height: auto;
  }

  svg {
    transition: all 0.3s ease;
    margin-top: auto;

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

    @media screen and (max-width: 767px) {
      width: 27px;
      height: 27px;
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

  &:hover p {
    opacity: 1;
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

  &:active p {
    opacity: 1;
  }

  @media screen and (max-width: 767px) {
    max-width: auto;
  }
`;
