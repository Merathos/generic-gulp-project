import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 87px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-gap: 30px;
  }
`;
