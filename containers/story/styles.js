import styled from 'styled-components';
import { Container } from 'elements';

export const StyledContainer = styled(Container)`
  position: relative;

  @media screen and (max-width: 767px) {
    overflow: hidden;
  }
`;

export const ContentContainer = styled(Container)`
  margin-bottom: 160px;

  *:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 0;
  }
`;

export const GreyContainer = styled.div`
  background-color: #f7f8f9;
  background-repeat: no-repeat;
  background-position: 118% 298%;
  overflow-x: hidden;

  &:first-child {
    margin-bottom: 160px;

    @media screen and (max-width: 767px) {
      margin-bottom: 80px;
    }
  }

  @media screen and (max-width: 767px) {
    background-size: 50% 50%;
    background-position: 150% 120%;
  }
`;
