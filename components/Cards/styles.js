import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 85px;
  grid-gap: ${props => (props.type === 'teams' ? '80px 4px' : '80px')};

  @media screen and (max-width: 1300px) {
    grid-gap: ${props => (props.type === 'teams' ? '80px 4px' : '80px 40px')};
  }

  @media screen and (max-width: 1200px) {
    grid-gap: 80px 40px;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: ${props =>
      props.type === 'teams' ? '1fr 1fr' : '1fr'};
    grid-gap: ${props => (props.type === 'teams' ? '80px 40px' : '70px 40px')};
    margin-top: ${props => (props.type === 'teams' ? '35px' : '85px')};
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 420px) {
    grid-gap: 34px;
    margin-top: 30px;
  }
`;

export const ListItem = styled.li`
  display: flex;

  @media screen and (max-width: 1024px) {
    justify-content: ${props =>
      props.type === 'teams' ? 'center' : 'flex-start'};
  }

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }

  a {
    display: flex;
  }
`;
