import styled from 'styled-components';
import { Container } from 'elements';

export const Main = styled.main`
  background-image: url('/backgrounds/contacts-location.png');
  background-repeat: no-repeat;
  background-position: 100% 76%;

  @media screen and (max-width: 1360px) {
    background-position: 100% 72%;
  }

  @media screen and (max-width: 767px) {
    background-size: 75px auto;
    background-position: 100% 82%;
  }
`;

export const StyledContainer = styled(Container)``;

export const GreyContainer = styled.div`
  background-color: #f7f8f9;
  background-image: url('/backgrounds/contacts-header.png');
  background-repeat: no-repeat;
  background-position: 100% 100%;
  margin-bottom: 160px;

  @media screen and (max-width: 960px) {
    background-image: none;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 80px;
  }
`;
