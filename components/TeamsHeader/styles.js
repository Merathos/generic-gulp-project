import styled from 'styled-components';
import { Text } from 'elements';

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 960px) {
    flex-direction: column;
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
  z-index: 1;

  @media screen and (max-width: 960px) {
    max-width: none;
    width: 100%;
    padding-right: 0;
  }

  @media screen and (max-width: 767px) {
    margin-right: 0;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 60px;
  font-size: 24px;
  line-height: 150%;

  @media screen and (max-width: 960px) {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 158%;
  }
`;

export const Picture = styled.img`
  align-self: flex-start;
  max-width: 500px;
  width: 40%;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
