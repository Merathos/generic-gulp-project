import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-gap: 76px;
  grid-row-gap: 55px;
  grid-template-columns: repeat(auto-fill, 349px);
  grid-auto-rows: 0;

  @media (max-width: 834px) {
    grid-template-columns: repeat(auto-fill, minmax(315px, 1fr));
    grid-gap: 30px;
    grid-row-gap: 26px;
  }

  @media (max-width: 768px) {
    grid-row-gap: 33px;
  }

  @media (max-width: 420px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
`;

export const Item = styled.div`
  overflow: hidden;

  &:first-child {
    grid-column: span 2;

    @media (max-width: 834px) {
      grid-column: span 1;
    }
  }
`;
