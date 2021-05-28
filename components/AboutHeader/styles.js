import styled from 'styled-components';
import { TitleH1, TitleH3, SmallText, Subtitle } from 'elements';

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 200px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    padding-bottom: 100px;
  }

  @media screen and (max-width: 767px) {
    padding-top: 110px;
    padding-bottom: 80px;
  }
`;

export const Wrapper = styled.article`
  width: 77%;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Title = styled(TitleH1)`
  margin-bottom: 52px;

  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
`;

export const Paragraph = styled.p`
  width: 80%;
  font-size: 24px;
  line-height: 150%;
  margin-bottom: 148px;

  @media screen and (max-width: 960px) {
    margin-bottom: 60px;
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 25.28px;
  }
`;

export const Features = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 60px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 80%;
  }

  @media screen and (max-width: 767px) {
    width: 90%;
    margin-bottom: 50px;
  }
`;

export const Element = styled.li`
  max-width: 240px;
  margin-right: 62px;
  margin-bottom: 40px;

  @media screen and (max-width: 960px) {
    width: 80%;
    max-width: none;
    margin-right: 0;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

export const ListTitle = styled(TitleH3)`
  font-weight: 700;
  color: #2f8ed9;
  margin-bottom: 12px;
  white-space: nowrap;

  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }
`;

export const StyledSmallText = styled(SmallText)`
  white-space: pre-wrap;
`;

export const Aside = styled.aside`
  width: 23%;
  margin-top: 152px;

  @media screen and (max-width: 1360px) {
    margin-top: 115px;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    margin-top: 0;
  }
`;

export const AsideText = styled(Subtitle)`
  line-height: 144%;

  @media screen and (max-width: 767px) {
    width: 75%;
  }
`;
