import styled from 'styled-components';
import { TitleH3 } from 'elements';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 105px;
  max-width: 856px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    margin-top: 60px;
    max-width: 100%;
  }

  @media screen and (max-width: 420px) {
    margin-top: 40px;
  }
`;

export const ListItem = styled.li`
  min-width: 43%;
  margin-right: 10px;
  margin-bottom: 10px;

  @media screen and (max-width: 600px) {
    margin-bottom: 20px;

    :last-child {
      margin-bottom: 0;
    }
  }
`;

export const VacancyLink = styled.a`
  display: flex;
`;

export const VacancyQuantity = styled.span`
  align-self: flex-end;
  margin-right: 16px;
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 700;
  line-height: 120%;
  color: #2f8ed9;

  @media screen and (max-width: 600px) {
    font-size: 10px;
    margin-bottom: 0;
    margin-right: 10px;
  }
`;

export const VacancyTitle = styled(TitleH3)`
  font-size: 32px;
  line-height: 170%;

  @media screen and (max-width: 600px) {
    font-size: 16px;
    line-height: 120%;
  }
`;
