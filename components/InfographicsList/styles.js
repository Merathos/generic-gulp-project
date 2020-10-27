import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 70%;

  @media screen and (max-width: 1360px) {
    width: 90%;
  }

  @media screen and (max-width: 720px) {
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 70px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-bottom: 80px;

  :hover {
    b {
      color: #2f8ed9;
      opacity: 1;
    }

    p {
      color: #201f2a;
    }
  }

  @media screen and (max-width: 1360px) {
    cursor: auto;
  }

  @media screen and (max-width: 720px) {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 600px) {
    width: 40%;

    :nth-child(1n) {
      margin-left: 30px;
    }
  }
`;

export const ItemValue = styled.b`
  margin-bottom: 12px;
  font-size: 54px;
  line-height: 101%;
  font-weight: 800;
  opacity: 0.2;

  @media screen and (max-width: 1360px) {
    color: #2f8ed9;
    opacity: 1;
  }

  @media screen and (max-width: 960px) {
    font-size: 32px;
  }

  @media screen and (max-width: 420px) {
    font-size: 22px;
  }
`;

export const ItemTitle = styled.p`
  width: 70%;
  font-size: 20px;
  line-height: 134%;
  color: #000000;

  :first-letter {
    text-transform: lowercase;
  }

  @media screen and (max-width: 1360px) {
    color: #201f2a;
  }

  @media screen and (max-width: 960px) {
    font-size: 14px;
  }
`;

export const GraphBlock = styled.div`
  width: 30%;

  @media screen and (max-width: 1360px) {
    display: none;
  }
`;
