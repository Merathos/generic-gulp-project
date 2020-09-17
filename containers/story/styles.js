import styled from 'styled-components';

export const Container = styled.main`
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

// export const Container = styled.section`
//   max-width: 1200px;
//   padding: 0 45px;
//   margin: 0 auto;

//   @media screen and (max-width: 420px) {
//     max-width: 375px;
//     padding: 0 30px;
//   }

//   @media screen and (max-width: 240px) {
//     max-width: 320px;
//     padding: 0 20px;
//   }
// `;

export const GreyContainer = styled.div`
  background-color: #F7F8F9;
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