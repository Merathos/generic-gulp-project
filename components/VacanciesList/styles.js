import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 104px;
  max-width: 856px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    margin-top: 60px;
    max-width: 100%;
  }

  @media screen and (max-width: 420px) {
    margin-top: 52px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  width: 45%;
  margin-bottom: 10px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 20px;

    :last-child {
      margin-bottom: 0;
    }
  }
`;

export const VacancyQuantity = styled.span`
  align-self: flex-end;
  margin-right: 18px;
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 700;
  line-height: 120%;
  color: #2f8ed9;

  @media screen and (max-width: 1024px) {
    font-size: 14px;
    margin-bottom: 0;
    margin-right: 14px;
  }

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

export const VacancyTitle = styled.a`
  align-self: flex-end;
  font-size: 32px;
  line-height: 170%;
  font-weight: 700;
  word-break: break-word;
  transition: color 0.2s ease;

  @media screen and (max-width: 1024px) {
    font-size: 24px;
  }

  @media screen and (max-width: 600px) {
    font-size: 16px;
    line-height: 120%;
  }
`;
