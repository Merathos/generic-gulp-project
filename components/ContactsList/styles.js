import styled from 'styled-components';

export const List = styled.dl`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 90px;
  margin-right: 40px;

  @media screen and (max-width: 1200px) {
    margin-left: 60px;
  }

  @media screen and (max-width: 1024px) {
    margin-left: 0;
  }
`;

export const ListItem = styled.div`
  &:not(:last-child) {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 900px) {
    &:not(:last-child) {
      margin-bottom: 22px;
    }
  }
`;

export const Term = styled.dt`
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 20.96px;
  opacity: 50%;

  @media screen and (max-width: 900px) {
    margin-bottom: 6px;
    font-size: 14px;
    line-height: 18.34px;
  }
`;

export const Definition = styled.dd`
  font-size: 22px;
  line-height: 26.4px;

  a {
    font-weight: 700;
    transition: color 0.3s ease;
  }

  @media screen and (max-width: 900px) {
    font-size: 16px;
    line-height: 25.28px;
  }
`;
