import styled from 'styled-components';
import { TitleH2, Text, Subtitle } from 'elements';

export const Wrapper = styled.a`
  /* display: flex;
  justify-content: space-between;
  margin-bottom: 100px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    margin-bottom: 50px;
  } */
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