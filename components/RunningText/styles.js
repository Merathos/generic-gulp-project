import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 50px;
  margin-bottom: 28px;
  overflow: hidden;

  svg {
    width: 250%;
    margin-left: -65%;
    margin-top: -50px;
  }

  @media screen and (max-width: 1200px) {
    margin-bottom: 0;
  }

  @media screen and (max-width: 1024px) {
    height: 340px;
  }

  @media screen and (max-width: 800px) {
    height: 280px;
  }

  @media screen and (max-width: 720px) {
    height: 240px;
    margin-top: 0;
    margin-bottom: 0;

    svg {
      margin-top: -20px;
    }
  }

  @media screen and (max-width: 420px) {
    height: 150px;
    margin-top: 20px;
  }
`;

export const Link = styled.a`
  font-size: 10px;
  text-transform: uppercase;
  color: #feb251;
  white-space: pre;

  :hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }

  @media screen and (max-width: 420px) {
    font-size: 15px;
  }
`;
