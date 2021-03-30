import styled from 'styled-components';

export const List = styled.ul`
  background-color: #f7f8f9;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9;

  @media screen and (max-width: 767px) {
    box-sizing: border-box;
    margin: 94px auto;
    display: flex;
    position: relative;
    padding: 0 10%;
    top: 0;
    transform: translateY(0);
    max-width: 315px;
    width: 100%;
    justify-content: space-around;
    z-index: 0;
  }
`;

export const Link = styled.a`
  width: 47px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  @media screen and (max-width: 767px) {
    width: 80px;
    height: 47px;
  }

  &:hover {
    @media screen and (min-width: 769px) {
      border-color: #53b443;
      background-color: #53b443;
      color: #ffffff;
    }
  }

  &:active {
    border-color: #339722;
    background-color: #339722;
  }
`;
