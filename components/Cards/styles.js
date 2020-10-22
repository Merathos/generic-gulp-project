import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 85px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-gap: 30px;
    margin-top: 30px;
  }
`;
