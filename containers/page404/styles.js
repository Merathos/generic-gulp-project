import styled from 'styled-components';
import { Btn } from 'elements';

export const Wrapper = styled.div`
  margin-top: 150px;
  margin-right: auto;
  margin-left: auto;
  max-width: calc(100% - 60px);
  overflow-x: hidden;

  svg {
    width: 112%;
    height: 200px;
    position: relative;
    margin: 0 auto 60px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 110px;
    svg {
      margin-bottom: 40px;
    }
  }
`;

export const Text = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  text-align: center;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 130%;
  }
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 148%;
  color: #201f2a;
  opacity: 0.5;
  text-align: center;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 128%;
    margin-bottom: 40px;
  }
`;

export const Button = styled(Btn)`
  width: 240px;
  border: none;
  margin: 0 auto;
`;
