import styled, { css } from 'styled-components';
import TitleH2 from 'elements/TitleH2';
import Button from 'elements/Button';

export const Section = styled.section`
  background-color: #f7f8f9;
  margin-bottom: 100px;

  @media screen and (max-width: 420px) {
    margin-bottom: 50px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-areas:
    'a b'
    'c b'
    'd b'
    '. b';
  grid-column-gap: 170px;
  background-image: ${(props) =>
    props.decor ? "url('/backgrounds/application.png')" : 'none'};
  background-repeat: no-repeat;
  background-position: 100% center;
  padding: 160px 50px 180px;

  ${(props) =>
    props.type === 'relocation' &&
    css`
      background-image: url('/backgrounds/relocation-vacancies.png');
      background-repeat: no-repeat;
      background-position: 72% 80%;

      @media screen and (max-width: 1024px) {
        background-image: none;
      }
    `};

  @media screen and (max-width: 1024px) {
    grid-column-gap: 60px;
  }

  @media screen and (max-width: 724px) {
    grid-template-areas:
      'a'
      'b'
      'c'
      'd';
    grid-column-gap: 0;
    padding: 80px 45px 80px;
    background-size: 50%;
    background-position: 150% center;
  }

  @media screen and (max-width: 420px) {
    max-width: 315px;
    padding-left: 30px;
    padding-right: 30px;
  }

  ${(props) =>
    props.vacancy &&
    css`
      @media screen and (max-width: 1200px) {
        background-size: 50%;
        background-position: 150% center;
      }
    `};
`;

export const StyledButton = styled(Button)`
  margin-top: 40px;
  grid-area: d;
  margin-right: 20px;
  max-width: ${(props) => (props.usage === 'relocation' ? '236px' : '230px')};
  box-sizing: border-box;
  text-align: center;

  @media screen and (max-width: 724px) {
    margin-top: ${(props) => (props.usage === 'relocation' ? '60px' : '40px')};
  }

  @media screen and (max-width: 420px) {
    margin-right: 0;
    margin-top: 0;
    margin-bottom: ${(props) => (props.usage === 'relocation' ? '0' : '20px')};
    max-width: 180px;
  }
`;

export const H2 = styled(TitleH2)`
  max-width: 520px;
  margin-bottom: 40px;
  grid-area: a;

  ${(props) =>
    props.vacancy &&
    css`
      @media screen and (max-width: 768px) {
        max-width: 315px;
      }
    `};
`;

export const Picture = styled.img`
  width: 344px;
  grid-area: b;

  @media screen and (max-width: 1024px) {
    width: 260px;
  }

  @media screen and (max-width: 724px) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 20px;
    width: 100%;
  }
`;

export const Text = styled.p`
  max-width: 700px;
  font-size: 20px;
  line-height: 158%;
  grid-area: c;

  a {
    display: inline;
    color: #53b443;
    transition: color 0.3s;

    &:hover,
    &:active {
      color: #339722;
    }
  }

  @media screen and (max-width: 420px) {
    font-size: 16px;
    line-height: 158%;
    margin-bottom: 60px;
  }
`;
