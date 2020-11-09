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

export const GreyWrapper = styled.div`
  background-color: #F7F8F9;
  margin-bottom: 100px;
  padding-bottom: 160px;

  @media screen and (max-width: 420px) {
    margin-bottom: 50px;
    padding-bottom: 0;
  }
`;