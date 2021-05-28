import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  min-height: 32px;

  @media screen and (max-width: 960px) {
    margin-bottom: 15px;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 0;
  }
`;

export const Element = styled.li`
  margin-right: 22px;
  font-feature-settings: 'liga' off;
`;
