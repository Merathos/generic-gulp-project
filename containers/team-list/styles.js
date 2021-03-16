import styled from 'styled-components';
import { TitleH1 } from 'elements';

export const Main = styled.main`
  background: url('/backgrounds/teams-bg.png') no-repeat right 110px,
    url('/backgrounds/sidebar-bg.png') no-repeat left 352px;

  @media screen and (max-width: 1360px) {
    background: url('/backgrounds/teams-bg.png') no-repeat right 110px,
      url('/backgrounds/sidebar-bg.png') no-repeat left 620px;
  }

  @media screen and (max-width: 1024px) {
    background-image: none;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  padding: 200px 45px 0;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    padding-top: 110px;
  }

  @media screen and (max-width: 768px) {
    padding-top: 18px;
  }

  @media screen and (max-width: 420px) {
    padding: 30px 30px 0;
  }
`;

export const Grid = styled.div`
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Aside = styled.aside`
  max-width: 254px;
  margin-right: 98px;
  float: left;

  @media screen and (max-width: 1300px) {
    margin-right: 60px;
  }

  @media screen and (max-width: 1024px) {
    /* position: sticky; */
    top: 92px;
    max-width: 100%;
    margin-right: 0;
  }

  @media screen and (max-width: 420px) {
    top: 78px;
  }
`;

export const Article = styled.article`
  width: 100%;
  order: -2;

  @media screen and (max-width: 1024px) {
    margin-bottom: 15px;
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 0;
  }
`;

export const Title = styled(TitleH1)`
  margin-bottom: 40px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 15px;
    line-height: 1.34;
  }
`;

export const CardsWrapper = styled.div`
  padding-top: 14px;

  @media screen and (max-width: 1024px) {
    padding-top: 34px;
  }
`;
