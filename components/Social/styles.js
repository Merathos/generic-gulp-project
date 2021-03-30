import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  min-width: 250px;
  margin-right: ${(props) => (props.noMargin ? '0' : '240px')};

  @media screen and (max-width: 1360px) {
    margin-right: ${(props) => (props.noMargin ? '0' : '80px')};
  }

  @media screen and (max-width: 960px) {
    margin-right: ${(props) => (props.noMargin ? '0' : '40px')};
  }

  @media screen and (max-width: 767px) {
    margin: 0;
  }

  @media screen and (max-width: 360px) {
    min-width: auto;
  }
`;

export const Element = styled.li`
  margin-bottom: 10px;

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
  background-color: ${(props) => (props.grey ? '#FFFFFF' : '#F7F8F9')};
  border-radius: 50%;
  transition: background-color 200ms ease;

  &:hover {
    background-color: ${(props) =>
      props.color === 'blue' ? '#2F8ED9' : '#FB5235'};

    path {
      fill: #fff;
    }
  }

  &:active {
    background-color: ${(props) =>
      props.color === 'blue' ? '#2079BF' : '#EC381A'};

    path {
      fill: #fff;
    }
  }
`;
