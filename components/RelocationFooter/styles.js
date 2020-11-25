import styled from 'styled-components';
import { Subtitle } from 'elements';

export const Section = styled.section`
  padding-top: 160px;
  padding-bottom: 60px;
  background-color: #f7f8f9;
  background-image: url('backgrounds/relocation-footer.png');
  background-repeat: no-repeat;
  background-position: right bottom;

  @media screen and (max-width: 1024px) {
    background-image: none;
  }

  @media (max-width: 768px) {
    padding-top: 80px;
  }
`;

export const Title = styled.b`
  display: block;
  font-weight: bold;
  font-size: 50px;
  line-height: 120%;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 134%;
    margin-bottom: 15px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  padding: 0 30px;
  margin: 0 auto;
`;

export const List = styled.ul`
  display: grid;
  max-width: 1187px;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fill, 330px);
  justify-content: space-between;

  @media (max-width: 1150px) {
    justify-content: flex-start;
  }

  @media (max-width: 420px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 330px));
  }
`;

export const Text = styled(Subtitle)`
  margin-bottom: 27px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 152%;
  }

  @media (max-width: 759px) {
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

  @media (max-width: 768px) {
    min-height: 155px;
  }

  @media (max-width: 759px) {
    min-height: auto;
  }

  svg {
    transition: all 0.3s ease;
    margin-top: auto;

    @media (max-width: 768px) {
      width: 27px;
      height: 27px;
    }
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

  @media (max-width: 420px) {
    max-width: auto;
  }
`;
