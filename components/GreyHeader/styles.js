import styled from 'styled-components';
import { TitleH3, Text } from 'elements';
import MagicQuadrant from 'public/images/about-magic-quadrant.svg';

export const Grid = styled.div`
  display: flex;
  padding-top: 240px;
  padding-bottom: 100px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding-top: 110px;
    padding-bottom: 80px;
  }
`;

export const Wrapper = styled.article`
  margin-right: 92px;
  max-width: 854px;

  @media screen and (max-width: 420px) {
    margin-right: 0;
  }
`;

export const Aside = styled.aside`
  width: 254px;

  @media screen and (max-width: 420px) {
    width: 100%;
  }
`;

export const Paragraph = styled(Text)`
  margin-bottom: 140px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 60px;
  }
`;

export const Features = styled.ul`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Logo = styled(MagicQuadrant)`
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 8px;
  }
`;

export const ListTitle = styled(TitleH3)`
  color: #2F8ED9;
  margin-bottom: 12px;

  @media screen and (max-width: 420px) {
    margin-bottom: 10px;
  }
`;

export const Element = styled.li`
  max-width: 270px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 30px;
    max-width: auto;
  }
`;