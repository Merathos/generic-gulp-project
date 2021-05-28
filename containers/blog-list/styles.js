import styled from 'styled-components';
import { TitleH1, Container } from 'elements';

export const StyledContainer = styled(Container)`
  padding-top: 200px;
  overflow: auto;

  @media screen and (max-width: 767px) {
    padding-top: 0;
    overflow: hidden;
  }
`;

export const Title = styled(TitleH1)`
  margin-bottom: 40px;
`;
