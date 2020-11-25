import styled from 'styled-components';
import { TitleH1 } from 'elements';

export const Section = styled.section`
  padding-top: 200px;

  @media (max-width: 768px) {
    padding-top: 115px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  overflow: hidden;
`;

export const Title = styled(TitleH1)`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;
