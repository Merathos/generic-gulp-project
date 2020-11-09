import styled from 'styled-components';
import { TitleH1 } from 'elements';

export const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 45px;
  overflow: hidden;

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
  order: -2;
`;

export const Grid = styled.div`
  padding-top: 200px;

  @media screen and (max-width: 768px) {
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

export const Title = styled(TitleH1)`
  margin-bottom: 100px;

  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Block = styled.div`
  @media screen and (max-width: 420px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 35px;
  }
`;

export const List = styled.div`
  margin-bottom: 25px;
`;
