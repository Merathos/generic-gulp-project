import styled from 'styled-components';
import Button from '../../elements/Button';

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 394px;
  height: 301px;
  margin-top: 20px;
  background-color: #f7f8f9;
  padding: 60px 240px 70px 60px;

  ::before {
    content: '';
    position: absolute;
    bottom: 50px;
    right: 85px;
    width: 115px;
    height: 115px;
    background-color: #2f8ed9;
    transform: rotate(37deg);
  }

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 310px;
    height: 310px;
    clip-path: circle(50% at 100% 100%);
    background-color: #53b443;
  }

  @media screen and (max-width: 1360px) {
    width: 70%;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 60px 30px;
  }

  @media screen and (max-width: 420px) {
    ::before {
      bottom: 55px;
      right: 20px;
      width: 73px;
      height: 73px;
    }

    ::after {
      width: 160px;
      height: 160px;
      clip-path: circle(50% at 100% 100%);
    }
  }
`;

export const Title = styled.b`
  margin-bottom: 14px;
  font-size: 50px;
  line-height: 60px;
  font-weight: 800;
  color: #fb5235;
  text-transform: uppercase;

  @media screen and (max-width: 720px) {
    font-size: 34px;
    line-height: 130%;
  }

  @media screen and (max-width: 420px) {
    font-size: 28px;
    margin-bottom: 10px;
  }
`;

export const Date = styled.p`
  margin-bottom: 20px;
  color: #201f2a;

  @media screen and (max-width: 720px) {
    margin-bottom: 40px;
  }
`;

export const EventButton = styled(Button)`
  align-self: flex-start;
  margin-top: auto;
  z-index: 1;
`;
