import styled from 'styled-components';
import { TitleH3, Text } from 'elements';

export const Section = styled.div`
  max-width: 380px;

  &:hover {
    color: #53B443;
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 30px;
  }
`;

export const StyledText = styled(Text)`
  margin-bottom: 45px;

  @media screen and (max-width: 420px) {
    margin-bottom: 30px;
  }
`;

export const H3 = styled(TitleH3)`
  margin-bottom: 20px;

  @media screen and (max-width: 420px) {
    margin-bottom: 14px;
  }
`;