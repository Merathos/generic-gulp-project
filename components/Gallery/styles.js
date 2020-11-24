import styled from 'styled-components';
import { TitleH2 } from 'elements';

export const Wrapper = styled.div`
  position: relative;
  margin-top: 80px;
  padding-bottom: 184px;

  @media screen and (max-width: 1024px) {
    margin-top: 0;
  }

  @media screen and (max-width: 960px) {
    padding-bottom: 0;
  }
`;

export const Title = styled(TitleH2)`
  margin: 0 auto 100px;
  max-width: 1200px;
  padding: 0 45px;

  @media screen and (max-width: 420px) {
    margin-bottom: 40px;
    padding: 0 30px;
  }
`;
