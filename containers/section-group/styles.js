import styled from 'styled-components';
import { TitleH2 } from 'elements';

export const Wrapper = styled.section`
  padding-top: 60px;
  margin-bottom: 100px;
  overflow-x: hidden;

  @media screen and (max-width: 420px) {
    padding-top: 30px;
    margin-bottom: 50px;
  }
`;

export const Title = styled(TitleH2)`
  margin-bottom: 40px;
`;