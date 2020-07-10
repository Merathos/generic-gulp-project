import styled from 'styled-components';
import { TitleH1 } from 'elements';

export const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 420px) {
    max-width: 315px;
  }

  @media screen and (max-width: 240px) {
    max-width: 280px;
  }
`;

export const Article = styled.article`
  max-width: 854px;
`;

export const Grid = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: row-reverse;
  padding-top: 200px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Aside = styled.aside`
  max-width: 254px;
  margin-right: 90px;

  @media screen and (max-width: 420px) {
    max-width: 100%;
    margin-right: 0;
  }
`;

export const Title = styled(TitleH1)`
  margin-bottom: 100px;

  @media screen and (max-width: 420px) {
    margin-bottom: 30px;
  }
`;