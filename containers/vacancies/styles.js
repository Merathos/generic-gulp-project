import styled from 'styled-components';
import { TitleH2 } from 'elements';

export const Container = styled.div`
  padding: 155px 120px 0 120px;

  @media screen and (max-width: 1024px) {
    padding: 100px 60px 0 60px;
  }

  @media screen and (max-width: 420px) {
    padding: 80px 30px 0;
  }
`;

export const Title = styled(TitleH2)`
  margin-bottom: 40px;
  font-size: 60px;
  line-height: 100px;

  @media screen and (max-width: 960px) {
    font-size: 40px;
  }

  @media screen and (max-width: 420px) {
    font-size: 32px;
    line-height: 134%;
    margin-bottom: 30px;
  }
`;
