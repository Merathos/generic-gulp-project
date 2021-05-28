import styled from 'styled-components';
import { Btn } from 'elements';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 100;
  width: 100%;
  background-color: #2f8ed9;
  padding: 48px 0;
  color: #f7f8f9;
  transition: all 0.5s ease-in;
  opacity: ${(p) => (p.startTransition ? '0' : '1')};

  @media screen and (max-width: 767px), (max-height: 420px) {
    padding: 40px 0;
    bottom: 0;
    opacity: 1;
    max-height: 100vh;
    transform: translate(-50%, ${(p) => (p.startTransition ? '55vh' : '0')});
  }

  @media (-webkit-min-device-pixel-ratio: 1.5) {
    padding: 32px 0;
  }

  @media screen and (max-height: 420px) {
    transform: translate(-50%, ${(p) => (p.startTransition ? '100vh' : '0')});
  }
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 120px;

  @media screen and (max-width: 1360px) {
    max-width: none;
    padding: 0 60px;
  }

  @media screen and (max-width: 960px) {
    padding: 0 40px;
  }

  @media screen and (max-width: 767px) {
    padding: 0 30px;
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 32px;

  @media (-webkit-min-device-pixel-ratio: 1.5) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 24px;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 30px;
    font-size: 18px;
    line-height: 24px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  opacity: 0.7;
  margin-left: 24px;

  @media (-webkit-min-device-pixel-ratio: 1.5) {
    font-size: 12px;
    line-height: 14px;
    margin-left: 16px;
  }

  @media screen and (max-width: 767px) {
    margin-left: 0;
    font-size: 14px;
    line-height: 17px;
  }
`;

export const Button = styled(Btn)`
  background-color: #f7f8f9;
  color: #2f8ed9;
  max-width: 174px;

  @media (-webkit-min-device-pixel-ratio: 1.5) {
    max-width: 116px;
    padding: 17px 24px;
    font-size: 12px;
    line-height: 17px;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 12px;
    max-width: 100%;
    width: 100%;
    font-size: 18px;
    line-height: 22px;
  }

  &:hover,
  &:active {
    background-color: #f7f8f9;
    color: #2f8ed9;
    border-color: #2f8ed9;
  }
`;
