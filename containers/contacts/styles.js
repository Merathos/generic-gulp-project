import styled from 'styled-components';

export const Container = styled.ul`
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
  background-color: #F7F8F9;
  /* background-image: url('backgrounds/about-grey-title.svg'); */
  background-repeat: no-repeat;
  background-position: 118% 298%;

  @media screen and (max-width: 420px) {
    background-size: 50% 50%;
    background-position: 150% 120%;
  }
`;