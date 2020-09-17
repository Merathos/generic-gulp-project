import styled from 'styled-components';
import { Text } from 'elements';

export const Section = styled.section`
  display: flex;
  margin-bottom: 100px;

  @media screen and (max-width: 420px) {
    margin-bottom: 50px;
  }
`;

export const Block = styled.div`
  font-weight: bold;
  font-size: 34px;
  line-height: 120%;

  @media screen and (max-width: 420px) {
    font-size: 22px;
    line-height: 120%;
  }
`;

export const Span = styled.span`
  font-weight: 800;
  font-size: 54px;
  color: #2F8ED9;
  margin-right: 30px;

  @media screen and (max-width: 420px) {
    margin-right: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 60px;
`;

export const Img = styled.img`
  width: 67px;
  margin-right: 14px;
`;

export const Description = styled(Text)`
  margin-top: 35px;
`;