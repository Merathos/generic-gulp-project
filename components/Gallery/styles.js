import styled from 'styled-components';
import { TitleH2 } from 'elements';

export const Title = styled(TitleH2)`
  margin: 0 auto;
  margin-bottom: 100px;
  max-width: 1200px;
  padding: 0 45px;

  @media screen and (max-width: 420px) {
    margin-bottom: 50px;
    padding: 0 30px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  padding-bottom: 150px;
`;
