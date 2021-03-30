import styled from 'styled-components';

export const List = styled.ul`
  margin-bottom: ${(p) => (p.noMarginBottom ? '0' : '80px')};
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 910px) {
    margin-bottom: ${(p) => (p.noMarginBottom ? '0' : '42px')};
  }
`;

export const Item = styled.li`
  margin-bottom: 80px;
  margin-left: auto;
  width: 100%;
  max-width: 862px;

  @media screen and (max-width: 1360px) {
    margin: 0 auto;
    margin-bottom: 40px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
