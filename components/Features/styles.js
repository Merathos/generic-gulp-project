import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  margin-bottom: 14px;

  @media screen and (max-width: 420px) {
    margin-bottom: 7px;
  }
`;

export const Span = styled.span`
  margin-right: 10px;
  font-size: 22px;
`;

export const Item = styled.li`
  display: flex;

  &:not(:last-child) {
    margin-right: 20px;
  }

  @media screen and (max-width: 420px) {
    &:not(:last-child) {
      margin-right: 14px;
  }
  }
`;
