import styled from 'styled-components';
import { TitleH2, Text } from 'elements';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 70% 21%;
  grid-gap: 60px;
  justify-content: space-between;

  @media screen and (max-width: 1360px) {
    grid-template-columns: 65% 25%;
    grid-gap: 20px;
  }

  @media screen and (max-width: 1360px) {
    grid-template-columns: 65% 30%;
  }

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`;

export const Title = styled(TitleH2)`
  margin-bottom: 40px;
  margin-top: 32px;

  @media screen and (max-width: 960px) {
    margin-top: 0;
  }

  @media screen and (max-width: 767px) {
    font-size: 28px;
    line-height: 130%;
    margin-bottom: 22px;
  }
`;

export const StyledText = styled(Text)`
  margin-bottom: 80px;

  @media screen and (max-width: 960px) {
    margin-bottom: 40px;
  }
`;
