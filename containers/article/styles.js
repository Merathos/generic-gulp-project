import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1100px;
  padding: 0 45px;
  margin: 0 auto;

  @media screen and (max-width: 420px) {
    max-width: 375px;
    padding: 0 30px;
  }

  @media screen and (max-width: 240px) {
    max-width: 320px;
    padding: 0 20px;
  }
`;

export const Wrapper = styled.article`
  margin-right: 92px;
  max-width: 854px;

  @media screen and (max-width: 420px) {
    margin-right: 0;
  }
`;

export const Grid = styled.div`
  display: flex;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Aside = styled.aside`
  max-width: 254px;

  @media screen and (max-width: 420px) {
    max-width: 100%;
  }
`;