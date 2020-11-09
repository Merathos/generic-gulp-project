import styled, { css } from 'styled-components';

export const List = styled.ul`
  display: flex;

  ${props =>
    props.carryover &&
    css`
      flex-wrap: wrap;
    `}

  @media screen and (max-width: 420px) {
    margin: 0;
  }
`;

export const Element = styled.li`
  ${props =>
    props.carryover &&
    css`
      margin-bottom: 10px;
    `}

  &:not(:last-child) {
    margin-right: 14px;
  }
`;

export const SocialLink = styled.a`
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.grey ? '#FFFFFF' : '#F7F8F9')};
  border-radius: 50%;
  transition: background-color 200ms ease;

  @media screen and (max-width: 420px) {
    margin-bottom: ${props => (props.carryover ? '0' : '30px')};
  }

  &:hover {
    background-color: ${props =>
      props.color === 'blue' ? '#2F8ED9' : '#FB5235'};

    path {
      fill: #fff;
    }
  }

  &:active {
    background-color: ${props =>
      props.color === 'blue' ? '#2079BF' : '#EC381A'};

    path {
      fill: #fff;
    }
  }
`;
