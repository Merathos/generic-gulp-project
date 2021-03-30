import styled from 'styled-components';
import { Text } from 'elements';

export const Section = styled.section`
  display: flex;
  margin-bottom: ${(props) => (props.noQuoteAuthor ? '100px' : '27px')};
  max-width: 850px;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

export const Block = styled.div`
  font-weight: bold;
  font-size: 34px;
  line-height: 120%;

  @media screen and (max-width: 767px) {
    font-size: 22px;
    line-height: 120%;
  }
`;

export const Span = styled.span`
  font-weight: 800;
  font-size: 54px;
  color: #2f8ed9;
  margin-right: 30px;

  @media screen and (max-width: 767px) {
    font-size: 42px;
    margin-top: -2px;
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

export const BlockQuote = styled.blockquote`
  b {
    font-weight: bold;
  }
`;
