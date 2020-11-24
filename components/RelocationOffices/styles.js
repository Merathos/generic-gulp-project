import styled from 'styled-components';
import { TitleH2 } from 'elements';

export const Section = styled.section`
  margin-bottom: 220px;

  @media (max-width: 768px) {
    margin-bottom: 80px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  padding: 0 30px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const Title = styled(TitleH2)`
  margin-bottom: 80px;

  @media (max-width: 768px) {
    margin-left: 30px;
    margin-bottom: 60px;
  }
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 459px;

  @media (max-width: 768px) {
    height: 267px;
  }
`;
