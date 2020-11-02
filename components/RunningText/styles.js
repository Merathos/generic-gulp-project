import styled from 'styled-components';

export const Container = styled.div`
  height: 400px;
  margin-top: 70px;
  transform: translateZ(0);

  svg {
    width: 700%;
    margin-left: -504%;
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
  }

  @media screen and (max-width: 420px) {
    height: 150px;
    margin-top: 14px;
    margin-bottom: 35px;
  }
`;

export const Link = styled.tspan`
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: #feb251;
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
