import styled from 'styled-components';
import { Subtitle, TitleH2 } from 'elements';

export const Text = styled(Subtitle)`
  margin-bottom: 37px;

  @media screen and (max-width: 420px) {
    margin-bottom: 30px;
  }
`;

export const Element = styled.div`
  margin-right: 20px;
  width: 420px;
  padding-right: 130px;
  position: relative;
  box-sizing: border-box;
  
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #2F8ED9;
    top: 10px;
    left: 0;
    z-index: -2;
  }

  @media screen and (max-width: 420px) {
    margin-right: 15px;
    padding-right: 30px;
    width: 320px;
  }
`;

export const Section = styled.div`
  width: 1600px;
  padding: 160px 0;

  @media screen and (max-width: 420px) {
    width: 320px;
    padding: 80px 0;
  }
`;

export const Number = styled.span`
  display: block;
  font-weight: 800;
  font-size: 18px;
  line-height: 120%;
  color: #2F8ED9;
  z-index: 2;
  margin-bottom: 40px;
  background-color: ${props => props.background || '#fff'};
  padding-right: 20px;
  width: 20px;

  @media screen and (max-width: 420px) {
    width: 301px;
    margin-right: 12px;
  }
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;
  margin-bottom: 16px;

  @media screen and (max-width: 420px) {
    font-size: 16px;
    line-height: 120%;
    margin-bottom: 8px;
  }
`;

export const H2 = styled(TitleH2)`
  max-width: 520px;
  margin-bottom: 80px;

  @media screen and (max-width: 420px) {
    margin-bottom: 30px;
  }
`;