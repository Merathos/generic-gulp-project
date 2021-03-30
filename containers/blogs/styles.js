import styled from 'styled-components';
import { TitleH1, Container } from 'elements';

export const Section = styled.section`
  padding-top: 200px;

  @media screen and (max-width: 767px) {
    padding-top: 110px;
  }
`;

export const StyledContainer = styled(Container)`
  overflow: hidden;
`;

export const Title = styled(TitleH1)`
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    margin-bottom: 30px;
  }
`;
