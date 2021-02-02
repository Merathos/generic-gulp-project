import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  padding: 0 45px;
  margin: 0 auto;
  position: relative;

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

export const Wrapper = styled.div`
  margin-right: auto;
  max-width: 854px;
  padding-bottom: 60px;

  @media screen and (max-width: 420px) {
    margin-right: 0;
    padding-bottom: 30px;
  }
`;

export const Grid = styled.div`
  display: flex;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Aside = styled.aside`
  width: 254px;

  @media screen and (max-width: 420px) {
    width: 100%;
  }
`;

export const GreyContainer = styled.div`
  background-color: #f7f8f9;
  background-repeat: no-repeat;
  background-position: 118% 298%;
  overflow-x: hidden;

  &:first-child {
    margin-bottom: 160px;

    @media screen and (max-width: 420px) {
      margin-bottom: 80px;
    }
  }

  @media screen and (max-width: 420px) {
    background-size: 50% 50%;
    background-position: 150% 120%;
  }
`;
