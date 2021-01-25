import styled from 'styled-components';
import { Btn } from 'elements';

export const Container = styled.div`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 100;
  width: calc(80% - 120px);
  max-width: 1100px;
  background-color: #2f8ed9;
  padding: 60px;
  color: #f7f8f9;
  transition: all 0.5s ease-in;
  opacity: ${p => (p.startTransition ? '0' : '1')};

  @media (max-width: 768px), (max-height: 420px) {
    padding-top: 50px;
    padding-right: 30px;
    padding-left: 30px;
    padding-bottom: 40px;
    width: calc(100% - 60px);
    bottom: 0;
    opacity: 1;
    overflow-y: scroll;
    max-height: 100vh;
    transform: translate(-50%, ${p => (p.startTransition ? '50vh' : '0')});
  }

  @media (max-width: 320px), (max-height: 380px) {
    top: 0;
  }
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  margin-bottom: 22px;

  @media (max-width: 824px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  opacity: 0.8;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 21px;
  }
`;

export const Button = styled(Btn)`
  background-color: #f7f8f9;
  color: #2f8ed9;
  max-width: 243px;

  @media (max-width: 768px) {
    max-width: 191px;
  }

  &:hover,
  &:active {
    background-color: #f7f8f9;
    color: #2f8ed9;
    border-color: #2f8ed9;
  }
`;
