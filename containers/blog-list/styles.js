import styled from 'styled-components';
import { TitleH1 } from 'elements';

export const Container = styled.div`
  max-width: 1200px;
  padding: 200px 45px 0;
  margin: 0 auto;
  overflow: auto;

  @media screen and (max-width: 420px) {
    max-width: 375px;
    padding: 0 30px;
    overflow: hidden;
  }

  @media screen and (max-width: 240px) {
    max-width: 320px;
    padding: 0 20px;
  }
`;

export const Title = styled(TitleH1)`
  margin-bottom: 40px;
`;
