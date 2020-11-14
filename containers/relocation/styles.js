import styled from 'styled-components';

export const Main = styled.main`
  background: url('backgrounds/relocation-difficulties.png') no-repeat right 73%,
    url('backgrounds/relocation-benefits.png') no-repeat right 36%;

  @media screen and (max-width: 1024px) {
    background-image: none;
  }
`;

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
  /* background-image: url('backgrounds/about-grey-title.svg'); */
  background-repeat: no-repeat;
  background-position: 118% 298%;
  /* margin-top: 220px; */

  @media screen and (max-width: 420px) {
    background-size: 50% 50%;
    background-position: 150% 120%;
    /* margin-top: 120px; */
  }
`;
