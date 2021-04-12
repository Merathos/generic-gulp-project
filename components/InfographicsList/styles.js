import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 25px;
  width: 70%;

  @media screen and (max-width: 1360px) {
    width: 90%;
  }

  @media screen and (max-width: 720px) {
    width: 100%;
    margin-bottom: 45px;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }

  @media screen and (max-width: 420px) {
    margin-left: 30px;
    margin-right: 30px;
    grid-gap: 26px 30px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 55px;

  ${(props) =>
    props.isActive &&
    css`
      b {
        color: #2f8ed9;
        opacity: 1;
      }
      p {
        color: #201f2a;
      }
    `}

  :hover {
    b {
      color: #2f8ed9;
      opacity: 1;
    }

    p {
      color: #201f2a;
    }
  }

  @media screen and (max-width: 720px) {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 15px;
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 0;
  }
`;

export const ItemValue = styled.b`
  margin-bottom: 12px;
  font-size: 54px;
  line-height: 101%;
  font-weight: 800;
  opacity: 0.2;
  transition: all 0.3s ease;

  @media screen and (max-width: 1360px) {
    color: #2f8ed9;
    opacity: 1;
  }

  @media screen and (max-width: 960px) {
    font-size: 32px;
  }

  @media screen and (max-width: 420px) {
    font-size: 22px;
    margin-bottom: 14px;
  }
`;

export const ItemTitle = styled.p`
  width: 70%;
  font-size: 20px;
  line-height: 134%;
  color: #000000;
  white-space: pre-wrap;

  :first-letter {
    text-transform: lowercase;
  }

  @media screen and (max-width: 1360px) {
    color: #201f2a;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    font-size: 14px;
  }
`;

export const GraphBlock = styled.div`
  width: 30%;

  @media screen and (max-width: 1360px) {
    display: none;
  }
`;
