import styled from 'styled-components';
import { TitleH2, Text } from 'elements';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 70% 21%;
  grid-gap: 60px;
  justify-content: space-between;

  @media (max-width: 1360px) {
    grid-template-columns: 65% 25%;
    grid-gap: 20px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 65% 30%;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`;

export const Title = styled(TitleH2)`
  margin-bottom: 40px;
  margin-top: 32px;

  @media (max-width: 1024px) {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 130%;
    margin-bottom: 22px;
  }
`;

export const StyledText = styled(Text)`
  margin-bottom: 80px;

  @media (max-width: 1024px) {
    margin-bottom: 40px;
  }
`;
