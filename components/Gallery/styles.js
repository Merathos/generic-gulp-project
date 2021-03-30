import styled from 'styled-components';
import { TitleH2 } from 'elements';

export const Wrapper = styled.div`
  position: relative;
  margin-top: 80px;
  padding-bottom: ${(p) => (p.controlsTop ? '0' : '100px')};
  padding-top: ${(p) => (p.controlsTop ? '160px' : '0')};

  @media screen and (max-width: 1360px) {
    margin-top: 0;
  }

  @media screen and (max-width: 960px) {
    padding-bottom: 0;
    padding-top: 0;
  }
`;

export const Title = styled(TitleH2)`
  margin: 0 auto 100px;
  max-width: 1200px;
  padding: 0 120px;

  @media screen and (max-width: 1360px) {
    padding: 0 60px;
  }

  @media screen and (max-width: 960px) {
    padding: 0 40px;
  }

  @media screen and (max-width: 767px) {
    padding: 0 30px;
    margin-bottom: 40px;
  }
`;
