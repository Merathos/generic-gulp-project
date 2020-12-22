import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
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

export const ListColumn = styled.div`
  width: 45%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    :not(:first-child) {
      margin-top: 20px;
    }
  }
`;

export const ListItem = styled.li`
  position: relative;
  padding-left: 32px;

  @media screen and (max-width: 1024px) {
    padding-left: 26px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 600px) {
    padding-left: 20px;
    margin-bottom: 20px;

    :last-child {
      margin-bottom: 0;
    }
  }
`;

export const VacancyQuantity = styled.span`
  position: absolute;
  top: 28px;
  left: 0;
  font-size: 14px;
  font-weight: 700;
  line-height: 120%;
  color: #2f8ed9;

  @media screen and (max-width: 1024px) {
    top: 20px;
    font-size: 14px;
  }

  @media screen and (max-width: 600px) {
    top: 7px;
    font-size: 10px;
  }
`;

export const VacancyTitle = styled.a`
  font-size: 32px;
  line-height: 200%;
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
