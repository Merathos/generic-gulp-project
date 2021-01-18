import styled from 'styled-components';
import { TitleH2 } from 'elements';

export const Container = styled.div`
  background-color: #ffffff;
  @media (max-width: 768px) {
    position: relative;
    top: 0;
    height: 100vh;
  }
`;
export const Wrapper = styled.div`
  padding-top: 37px;
  padding-bottom: 182px;
  background-image: url('/backgrounds/error-left.svg'),
    url('/backgrounds/error-right.svg');
  background-position: left 0 top 0px, right 100%;
  background-repeat: no-repeat, no-repeat;

  @media (max-width: 768px), (max-height: 550px) {
    padding-top: 22px;
    min-height: 100vh;
    padding-bottom: 0;
    background-size: 190px, 110px;
    background-position: left 0 top -100px, right 0 top 97%;
  }
`;

export const Content = styled.div`
  @media (max-width: 768px), (max-height: 550px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 315px;
  }
`;

export const Title = styled(TitleH2)`
  margin: 0 auto;
  margin-bottom: 30px;
  max-width: 500px;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 32px;
    line-height: 42.88px;
    letter-spacing: 0.01em;
  }
`;

export const Text = styled.p`
  margin: 0 auto;
  margin-bottom: 60px;
  max-width: 470px;
  font-size: 18px;
  line-height: 26.64px;
  opacity: 0.5;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    max-width: 315px;
    font-size: 14px;
    line-height: 22.12px;
  }
`;

export const Btn = styled.button`
  margin: 0 auto;
  font-weight: bold;
  font-size: 18px;
  line-height: 70px;
  background: #fb5235;
  border-radius: 8px;
  padding: 0 32px;
  color: #ffffff;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    min-height: 56px;
    font-size: 12px;
    line-height: 14.4px;
  }

  &:hover,
  &:active {
    background-color: #ec381a;
    color: #ffffff;
  }
`;
