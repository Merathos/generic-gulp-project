import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 45px;
  overflow-x: hidden;

  @media screen and (max-width: 420px) {
    max-width: 375px;
    padding: 0 30px;
  }

  @media screen and (max-width: 340px) {
    max-width: 320px;
    padding: 0 20px;
  }
`;

export const GreyContainer = styled.div`
  background-color: #F7F8F9;
  overflow-x: hidden;
  margin-bottom: 160px;

  @media screen and (max-width: 420px) {
    margin-bottom: 80px;
  }
`;

export const Article = styled.article`
  margin-right: 92px;
  max-width: 854px;

  @media screen and (max-width: 420px) {
    margin-right: 0;
  }
`;

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Aside = styled.aside`
  max-width: 254px;
  padding-top: 60px;

  @media screen and (max-width: 420px) {
    max-width: 100%;
    padding-top: 0;
  }
`;