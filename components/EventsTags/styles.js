import styled from 'styled-components';

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  min-height: 32px;
  margin-bottom: 63px;
  padding-left: 5px;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const Tag = styled.li`
  margin-right: 22px;
`;
