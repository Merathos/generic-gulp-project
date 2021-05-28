import styled from 'styled-components';

export const Container = styled.section`
  padding-top: 50px;
  padding-left: 120px;
  padding-right: 120px;

  @media screen and (max-width: 1360px) {
    padding-left: 60px;
    padding-right: 60px;
  }

  @media screen and (max-width: 960px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media screen and (max-width: 767px) {
    padding-left: 0;
    padding-right: 0;
    padding-top: 45px;
  }
`;
