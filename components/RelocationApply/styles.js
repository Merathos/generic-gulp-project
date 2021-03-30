import styled from 'styled-components';
import { TitleH2, Btn, Container } from 'elements';

export const Section = styled.section`
  background-color: #f7f8f9;
  margin-bottom: 160px;
  padding-top: 150px;
  padding-bottom: 0;

  @media screen and (max-width: 767px) {
    margin-bottom: 80px;
    padding-top: 80px;
  }
`;

export const StyledContainer = styled(Container)`
  padding-bottom: 140px;
  display: grid;
  grid-template-columns: 1fr 344px;
  grid-template-rows: max-content 1fr;
  grid-column-gap: 30px;
  grid-template-areas:
    'title pic'
    'content pic';

  @media screen and (min-width: 1200px) {
    background-image: url('/backgrounds/relocation-vacancies.png');
    background-repeat: no-repeat;
    background-position: 73.5% 80%;
  }

  @media screen and (max-width: 767px) {
    display: block;
    padding-bottom: 80px;
  }
`;

export const Content = styled.div`
  grid-area: content;
  max-width: 684px;
`;

export const Title = styled(TitleH2)`
  grid-area: title;
  margin-bottom: 37px;

  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
`;

export const Text = styled.p`
  font-size: 22px;
  line-height: 31px;
  margin-bottom: 80px;

  a {
    display: inline;
    color: #53b443;
    transition: color 0.3s ease;

    &:hover,
    &:active {
      color: #339722;
    }
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 60px;
    font-size: 16px;
    line-height: 25px;
  }
`;

export const Button = styled(Btn)`
  max-width: 229px;
  padding: 22px 28px;
  border: none;

  @media screen and (max-width: 767px) {
    padding: 19px 34px;
  }
`;

export const PicWrapper = styled.div`
  grid-area: pic;

  @media screen and (max-width: 767px) {
    margin-bottom: 15px;
  }

  img {
    max-width: 344px;
    max-height: 489px;

    @media screen and (max-width: 767px) {
      max-width: 315px;
      max-height: 319px;
      object-fit: cover;
    }
  }
`;
