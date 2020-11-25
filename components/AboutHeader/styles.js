import styled from 'styled-components';
import { TitleH1, TitleH3, SmallText, Subtitle } from 'elements';

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 210px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding-bottom: 100px;
  }

  @media screen and (max-width: 768px) {
    padding-top: 160px;
  }

  @media screen and (max-width: 420px) {
    padding-top: 110px;
  }
`;

export const Wrapper = styled.article`
  width: 77%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const Title = styled(TitleH1)`
  margin-bottom: 52px;

  @media screen and (max-width: 1200px) {
    font-size: 64px;
  }

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 40px;
  }
`;

export const Paragraph = styled.p`
  width: 80%;
  font-size: 24px;
  line-height: 150%;
  margin-bottom: 148px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 60px;
    width: 100%;
  }

  @media (max-width: 420px) {
    font-size: 16px;
    line-height: 25.28px;
  }
`;

export const Features = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 60px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    width: 80%;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 50px;
  }
`;

export const Element = styled.li`
  max-width: 240px;
  margin-right: 62px;
  margin-bottom: 40px;

  @media screen and (max-width: 1024px) {
    width: 80%;
    max-width: none;
    margin-right: 0;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 30px;
  }
`;

export const ListTitle = styled(TitleH3)`
  font-weight: 700;
  color: #2f8ed9;
  margin-bottom: 12px;
  white-space: nowrap;

  @media screen and (max-width: 420px) {
    margin-bottom: 10px;
  }
`;

export const StyledSmallText = styled(SmallText)`
  white-space: pre-wrap;
`;

export const Aside = styled.aside`
  width: 23%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const Logo = styled.img`
  display: inline-block;
  width: 154px;
  height: 25px;
  margin-top: 6px;
  margin-bottom: 20px;

  @media screen and (max-width: 420px) {
    margin-bottom: 12px;
  }
`;

export const AsideText = styled(Subtitle)`
  line-height: 144%;

  @media screen and (max-width: 420px) {
    width: 75%;
  }
`;
