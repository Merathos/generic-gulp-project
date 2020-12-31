import styled from 'styled-components';
import TitleH2 from 'elements/TitleH2';
import { Btn } from '../../elements';

export const Section = styled.section`
  margin-bottom: 60px;
  padding: 0 120px;
  background-color: #f7f8f9;
  background-image: url('/backgrounds/i-application.svg');
  background-repeat: no-repeat;
  background-position: top 48% right;

  @media screen and (max-width: 768px) {
    background-image: none;
    padding: 0 45px;
  }

  @media screen and (max-width: 420px) {
    padding: 0 30px;
    margin-bottom: 0;
  }
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 160px;
  padding-bottom: 160px;

  @media screen and (max-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export const H2 = styled(TitleH2)`
  max-width: 50%;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    max-width: none;
    margin-bottom: 20px;
  }
`;

export const Text = styled.p`
  max-width: 56%;
  font-size: 22px;
  line-height: 140.4%;

  a {
    display: inline;
    color: #53b443;
    transition: color 0.3s ease;

    &:hover,
    &:active {
      color: #339722;
    }
  }

  @media screen and (max-width: 768px) {
    max-width: none;
    font-size: 16px;
    line-height: 158%;
    margin-bottom: 60px;
  }
`;

export const StyledButton = styled(Btn)`
  margin-top: 80px;
  margin-right: 20px;
  max-width: 232px;
  border-color: #fb5235;

  &:hover {
    border-color: #ec381a;
  }

  @media screen and (max-width: 768px) {
    margin-top: 40px;
  }
`;
