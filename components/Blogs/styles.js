import styled from 'styled-components';
import { TitleH2, Text, Subtitle } from 'elements';

export const Wrapper = styled.div`
  max-width: 860px;
`;

export const List = styled.ul`
  margin-bottom: 100px;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  @media screen and (max-width: 1024px) {
    margin-bottom: 80px;
    grid-template-columns: 1fr;
  }
`;

export const Title = styled(TitleH2)`
  margin-bottom: 40px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 20px;
  }
`;

export const StyledText = styled(Text)`
  margin-bottom: 40px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 20px;
  }
`;

export const StyledSubtitle = styled(Subtitle)`
  opacity: 0.5;
  margin-bottom: 4px;
`;