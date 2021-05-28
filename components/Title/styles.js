import styled from 'styled-components';
import { Subtitle, TitleH1 } from 'elements';

export const Wrapper = styled.div`
  margin-top: 200px;

  @media screen and (max-width: 767px) {
    margin-top: 110px;
  }
`;

export const ArticleTitle = styled(TitleH1)`
  margin-bottom: 50px;
  font-size: 84px;

  @media screen and (max-width: 1360px) {
    font-size: 54px;
  }

  @media screen and (max-width: 767px) {
    font-size: 32px;
    margin-bottom: 18px;
  }
`;

export const Date = styled(Subtitle)`
  margin-bottom: 80px;

  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
`;

export const Description = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 158%;
  max-width: 854px;
  margin-bottom: 160px;

  @media screen and (max-width: 767px) {
    margin-bottom: 120px;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 80px;
    font-size: 16px;
    line-height: 158%;
  }
`;
