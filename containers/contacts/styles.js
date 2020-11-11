import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1200px;
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

export const GreyContainer = styled.div`
  background-color: #f7f8f9;
  background-image: url('backgrounds/contacts-header.png');
  background-repeat: no-repeat;
  background-position: 100% 100%;

  @media screen and (max-width: 1024px) {
    background-image: none;
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 50px;
  }
`;
