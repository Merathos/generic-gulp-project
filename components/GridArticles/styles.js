import styled from 'styled-components';
import { TitleH1 } from 'elements';

export const Section = styled.section`
  /* max-width: 1200px;
  padding: 200px 45px 0;
  margin: 0 auto;

  @media screen and (max-width: 420px) {
    max-width: 375px;
    padding: 0 30px;
  }

  @media screen and (max-width: 240px) {
    max-width: 320px;
    padding: 0 20px;
  } */
`;

// export const Title = styled(TitleH1)`
//   margin-bottom: 40px;
// `;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;

  @media (max-width: 420px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }
`;