import styled from 'styled-components';
import { TitleH1 } from 'elements';

export const Container = styled.div`
  max-width: 1200px;
  padding: 200px 45px 0;
  margin: 0 auto;

  @media screen and (max-width: 420px) {
    max-width: 375px;
    padding: 0 30px;
    overflow: hidden;
  }

  @media screen and (max-width: 240px) {
    max-width: 320px;
    padding: 0 20px;
  }
`;

export const Title = styled(TitleH1)`
  margin-bottom: 40px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 0;
  }
`;

export const Element = styled.li`
  margin-right: 22px;
`;

export const Article = styled.article`
  width: 100%;
  order: -2;
`;

export const Grid = styled.div`
  @media screen and (max-width: 1024px) {
    padding-top: 110px;
    display: flex;
    flex-direction: column;
  }
`;

export const Aside = styled.aside`
  max-width: 254px;
  margin-right: 90px;
  float: left;

  @media screen and (max-width: 420px) {
    max-width: 100%;
    margin-right: 0;
    float: none;
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
