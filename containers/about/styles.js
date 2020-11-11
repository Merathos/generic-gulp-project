import styled from 'styled-components';

export const Main = styled.main`
  overflow: hidden;
`;

export const Container = styled.section`
  max-width: 1200px;
  padding: 0 45px;
  margin: 0 auto;

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

export const GreyContainer = styled.div`
  background-color: #f7f8f9;
  /* background-image: url('backgrounds/about-grey-title.svg'); */
  background-repeat: no-repeat;
  background-position: 118% 298%;

  @media screen and (max-width: 420px) {
    background-size: 50% 50%;
    background-position: 150% 120%;
  }
`;

export const HeaderContainer = styled(GreyContainer)`
  background-image: url('backgrounds/about-header.svg');
  background-repeat: no-repeat;
  background-position: right bottom;

  @media (max-width: 768px) {
    background-size: 250px;
    background-position: right -100px bottom 90px;
  }
`;
