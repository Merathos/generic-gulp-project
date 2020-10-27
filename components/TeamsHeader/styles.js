import styled from 'styled-components';
import { TitleH1, Text } from 'elements';

export const Grid = styled.div`
  display: flex;
  padding-top: 240px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding-top: 110px;
    padding-bottom: 80px;
  }
`;

export const TextBlock = styled.div`
  max-width: 627px;
`;

export const Bold = styled.b`
  font-weight: 800;
  margin-right: 5px;
`;

export const H1 = styled(TitleH1)`
  max-width: 870px;
`;

export const StyledText = styled(Text)`
  display: inline;
`;

export const Wrapper = styled.article`
  max-width: 854px;
  align-items: center;

  @media screen and (max-width: 420px) {
    margin-right: 0;
  }
`;

export const Paragraph = styled(Text)`
  margin-bottom: 60px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 40px;
  }
`;

export const Features = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 100px;
  margin-bottom: 100px;

  @media screen and (max-width: 420px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-gap: 30px;
    margin-bottom: 30px;
  }
`;

export const Picture = styled.img`
  max-width: 500px;
  @media screen and (max-width: 420px) {
    display: none;
  }
`;
