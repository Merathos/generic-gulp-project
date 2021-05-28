import styled, { css } from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 85px;
  grid-gap: 80px;

  ${(props) =>
    props.type === 'teams' &&
    css`
      max-width: 780px;
    `};

  @media screen and (max-width: 1360px) {
    grid-gap: 80px 40px;
  }

  @media screen and (max-width: 960px) {
    grid-template-columns: ${(props) =>
      props.type === 'teams' ? '1fr 1fr' : '1fr'};
    grid-gap: ${(props) =>
      props.type === 'teams' ? '80px 40px' : '70px 40px'};
    margin-top: ${(props) => (props.type === 'teams' ? '35px' : '85px')};
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 767px) {
    grid-gap: 34px;
    margin-top: 30px;
  }
`;

export const ListItem = styled.li`
  @media screen and (max-width: 960px) {
    justify-content: ${(props) =>
      props.type === 'teams' ? 'center' : 'flex-start'};
  }

  @media screen and (max-width: 767px) {
    justify-content: flex-start;
  }

  a {
    display: flex;
  }
`;
