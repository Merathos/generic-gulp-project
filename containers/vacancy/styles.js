import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 45px 200px;
  position: relative;

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
