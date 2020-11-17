import styled from 'styled-components';
import { TitleH1 } from 'elements';

export const Main = styled.main`
  background: url('backgrounds/teams-bg.png') no-repeat right 10%;

  @media screen and (max-width: 1024px) {
    background-image: none;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  padding: 200px 45px 0;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding-top: 30px;
  }

  @media screen and (max-width: 420px) {
    max-width: 375px;
    padding: 30px 30px 0;
  }

  @media screen and (max-width: 240px) {
    max-width: 320px;
    padding: 30px 20px 0;
  }
`;

export const Title = styled(TitleH1)`
  margin-bottom: 40px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 0;
    line-height: 1.34;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const Element = styled.li`
  margin-right: 22px;
`;

export const Article = styled.article`
  width: 100%;
  order: -2;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Grid = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Aside = styled.aside`
  max-width: 254px;
  margin-right: 90px;
  float: left;

  @media screen and (max-width: 1200px) {
    margin-right: 30px;
  }

  @media screen and (max-width: 1024px) {
    max-width: 200px;
  }

  @media screen and (max-width: 768px) {
    position: sticky;
    top: 100px;
    max-width: 100%;
    margin-right: 0;
  }

  @media screen and (max-width: 420px) {
    top: 92px;
  }
`;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  min-height: 32px;
  margin-bottom: 100px;

  @media screen and (max-width: 420px) {
    margin-bottom: 80px;
  }
`;
