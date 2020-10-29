import styled from 'styled-components';
import { TitleH2 } from 'elements';

export const Container = styled.div`
  padding: 160px 120px 0 120px;

  @media screen and (max-width: 1024px) {
    padding: 100px 60px 0 60px;
  }

  @media screen and (max-width: 720px) {
    padding: 80px 60px 0;
  }

  @media screen and (max-width: 420px) {
    padding-left: 30px;
    padding-right: 30px;
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
