import styled from 'styled-components';
import { TitleH1 } from 'elements';

export const Main = styled.main`
  position: relative;
  background: url('/backgrounds/sidebar-bg.png') no-repeat left 514px;

  &:before {
    content: '';
    position: absolute;
    top: 130px;
    right: 0;
    width: 209px;
    height: 319px;
    background: url('/backgrounds/vacancies-bg.png') no-repeat;
    z-index: 4;
  }

  @media screen and (max-width: 1360px) {
    background-size: 45px auto;
  }

  @media screen and (max-width: 1280px) {
    background-image: none;

    &:before {
      display: none;
    }
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 45px;

  @media screen and (max-width: 420px) {
    max-width: 375px;
    padding: 0 30px;
  }

  @media screen and (max-width: 240px) {
    max-width: 320px;
    padding: 0 20px;
  }
`;

export const Article = styled.article`
  width: 100%;
  position: sticky;
  top: -30px;
  padding-bottom: 20px;
  background-color: #ffffff;
  order: -2;
  z-index: 2;

  @media screen and (max-width: 768px) {
    position: sticky;
    top: 30px;
    margin-left: -45px;
    margin-right: -45px;
    padding-left: 45px;
    padding-right: 45px;
    padding-bottom: 8px;
    background-color: #ffffff;
    z-index: 3;
  }

  @media screen and (max-width: 420px) {
    padding-bottom: 0;
    margin-left: -30px;
    margin-right: -30px;
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const Grid = styled.div`
  padding-top: 200px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding-top: 18px;
  }

  @media screen and (max-width: 420px) {
    padding-top: 30px;
  }
`;

export const FilterWrapper = styled.div`
  @media screen and (max-width: 768px) {
    position: sticky;
    top: ${props => (props.withExtraSpace ? '265px' : '214px')};
    margin-left: -45px;
    margin-right: -45px;
    padding: ${props => (props.active ? '16px 45px 50px' : '16px 45px')};
    background-color: #f7f8f9;
    z-index: 3;
  }

  @media screen and (max-width: 420px) {
    top: ${props => (props.withExtraSpace ? '232px' : '181px')};
    margin-left: -30px;
    margin-right: -30px;
    padding: ${props => (props.active ? '16px 30px 50px' : '16px 30px')};
  }
`;

export const FilterTitle = styled.button.attrs(props => ({
  transform: props.active
    ? 'rotate(-180deg) translateY(50%)'
    : 'translateY(-50%)',
}))`
  padding: ${props => (props.active ? '0 0 30px' : '0')};
  position: relative;
  font-size: 20px;
  font-weight: 500;
  line-height: 134%;
  text-align: left;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    width: 14px;
    height: 7px;
    top: ${props => (props.active ? '14px' : '50%')};
    right: 0;
    background-image: url('/icons/dropdown.svg');
    background-repeat: no-repeat;
    transform: ${props => props.transform};
    transition: transform 0.2s ease;
  }

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 134%;
  }
`;

export const Aside = styled.aside`
  position: sticky;
  top: 150px;
  max-width: 254px;
  margin-right: 74px;
  float: left;
  z-index: 4;

  @media screen and (max-width: 1300px) {
    margin-right: 44px;
  }

  @media screen and (max-width: 900px) {
    margin-right: 24px;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin-right: 0;
    float: none;
  }
`;

export const Title = styled(TitleH1)`
  margin-bottom: 62px;

  @media screen and (max-width: 1024px) {
    font-size: 64px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 5px;
    font-size: 32px;
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 14px;
  }
`;

export const InternshipLink = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 24px;

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
    path:first-child {
      fill: #339722;
      stroke: #339722;
    }

    path:last-child {
      stroke: #ffffff;
      fill: #ffffff;
    }
  }

  @media screen and (max-width: 768px) {
    margin-top: 16px;
    margin-bottom: 8px;

    svg {
      width: 26px;
      height: 26px;
    }
  }
`;

export const InternshipLinkText = styled.p`
  margin-right: 14px;
  font-weight: 500;
  font-size: 20px;
  line-height: 134%;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Resume = styled.p`
  margin-top: 40px;
  font-weight: 700;

  @media screen and (max-width: 420px) {
    margin-bottom: 30px;
    font-size: 14px;
    line-height: 140%;
  }
`;

export const ResumeButton = styled.button`
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
  line-height: 140%;
  color: #53b443;
  border: none;
  transition: color 0.3s ease;

  &:hover,
  &:active {
    color: #339722;
  }

  @media screen and (max-width: 420px) {
    font-size: 14px;
  }
`;

export const Block = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 34px;
  }

  @media screen and (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;

    > * {
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
`;

export const List = styled.div`
  margin-bottom: 16px;

  @media screen and (max-width: 420px) {
    margin-bottom: 24px;
  }
`;

export const CardsWrapper = styled.div`
  @media screen and (max-width: 768px) {
    margin-top: 60px;
  }

  ul {
    margin-top: 14px;

    @media screen and (max-width: 1024px) {
      margin-top: 5px;
    }
  }
`;
