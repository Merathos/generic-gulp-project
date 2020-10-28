import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 440px;
  margin-top: 50px;

  svg {
    width: 250%;
    margin-left: -40%;
    margin-top: -265px;
  }

  @media screen and (max-width: 1440px) {
    svg {
      margin-top: -16%;
    }
  }

  @media screen and (max-width: 1200px) {
    height: 360px;
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
