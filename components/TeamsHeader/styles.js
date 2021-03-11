import styled from 'styled-components';
import { Text } from 'elements';

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 200px;

  @media screen and (max-width: 1360px) {
    padding-top: 120px;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  @media screen and (max-width: 420px) {
    padding-top: 110px;
  }
`;

export const TextBlock = styled.div`
  max-width: 627px;
`;

export const Bold = styled.b`
  margin-right: 5px;
  font-weight: 800;
  line-height: 134%;
`;

export const StyledText = styled(Text)`
  display: inline;
`;

export const Wrapper = styled.article`
  max-width: 854px;
  width: 60%;
  align-items: center;
  padding-right: 80px;

  @media screen and (max-width: 1024px) {
    max-width: none;
    width: 100%;
    padding-right: 0;
  }

  @media screen and (max-width: 420px) {
    margin-right: 0;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 60px;
  font-size: 24px;
  line-height: 150%;

  @media screen and (max-width: 1024px) {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 420px) {
    font-size: 16px;
    line-height: 158%;
  }
`;

export const Picture = styled.img`
  align-self: flex-start;
  max-width: 500px;
  width: 40%;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
