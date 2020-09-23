import styled from 'styled-components';
import { TitleH1 } from 'elements';

export const Section = styled.section`
  /* @media screen and (max-width: 420px) {
    max-width: 375px;
    padding: 0 30px;
  } */
`;

// export const Title = styled(TitleH1)`
//   margin-bottom: 40px;
// `;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export const Item = styled.li`
  width: 33%;

  &:first-child {
    width: 66%;
  }

  @media (max-width: 420px) {
    width: 100%;

    &:first-child {
      width: 100%;
    }
  }
`;