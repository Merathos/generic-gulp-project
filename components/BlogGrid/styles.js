import styled, { css } from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-gap: 76px;
  grid-row-gap: 55px;
  grid-template-columns: repeat(auto-fill, 349px);

  @media (max-width: 834px) {
    grid-template-columns: repeat(auto-fill, minmax(315px, 1fr));
    grid-gap: 36px;
    grid-row-gap: 26px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, 315px);
    grid-row-gap: 33px;
  }

  @media (max-width: 725px) {
    max-width: max-content;
    margin: 0 auto;
  }

  @media (max-width: 420px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
`;

export const Item = styled.div`
  overflow: hidden;

  ${props =>
    props.isHighlight &&
    css`
      max-height: 440px;
      grid-column: span 2;

      @media (max-width: 834px) {
        grid-column: span 1;
      }
    `};

  ${props =>
    props.isAfterHighLight &&
    css`
      grid-row-end: span 1;
      padding-bottom: 76px;
    `}
`;
