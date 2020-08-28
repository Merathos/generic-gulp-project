import styled from 'styled-components';
import { TitleH2, Text, Subtitle } from 'elements';

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