import styled from 'styled-components';
import { TitleH1, Container } from 'elements';

export const Main = styled.main`
  background: url('/backgrounds/teams-bg.png') no-repeat right 110px,
    url('/backgrounds/sidebar-bg.png') no-repeat left 352px;

  @media screen and (max-width: 1360px) {
    background: url('/backgrounds/teams-bg.png') no-repeat right 40px,
      url('/backgrounds/sidebar-bg.png') no-repeat left 620px;
  }

  @media screen and (max-width: 960px) {
    background-image: none;
  }
`;

export const StyledContainer = styled(Container)`
  padding-top: 200px;

  @media screen and (max-width: 767px) {
    padding-top: 30px;
  }
`;

export const Grid = styled.div`
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Aside = styled.aside`
  max-width: 225px;
  margin-right: 120px;
  float: left;

  @media screen and (max-width: 1360px) {
    margin-right: 60px;
  }

  @media screen and (max-width: 960px) {
    /* position: sticky; */
    top: 92px;
    max-width: 100%;
    margin-right: 0;
  }

  @media screen and (max-width: 767px) {
    top: 78px;
  }
`;

export const Article = styled.article`
  width: 100%;
  order: -2;

  @media screen and (max-width: 960px) {
    margin-bottom: 15px;
  }

  @media screen and (max-width: 960px) {
    margin-bottom: 0;
  }
`;

export const Title = styled(TitleH1)`
  margin-bottom: 40px;

  @media screen and (max-width: 960px) {
    margin-bottom: 15px;
  }
`;

export const CardsWrapper = styled.div`
  padding-top: 14px;

  @media screen and (max-width: 960px) {
    padding-top: 34px;
  }
`;
