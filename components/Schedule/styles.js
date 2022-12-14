import styled from 'styled-components';
import { TitleH2, Btn, Container } from 'elements';

export const Section = styled.section`
  margin-bottom: 160px;
  background-image: url('/backgrounds/schedule.svg');
  background-position: right 0 top 950px;
  background-repeat: no-repeat;

  @media screen and (max-width: 767px) {
    margin-bottom: 80px;
    background-image: none;
  }
`;

export const StyledContainer = styled(Container)``;

export const Description = styled.p`
  margin-bottom: 160px;
  font-weight: 700;
  max-width: 850px;
  font-size: 24px;
  line-height: 159%;

  @media screen and (max-width: 767px) {
    margin-bottom: 80px;
    font-size: 16px;
    line-height: 25.28px;
  }
`;

export const MainTitle = styled(TitleH2)`
  margin-bottom: 100px;
  max-width: 500px;
  text-transform: uppercase;

  @media screen and (max-width: 767px) {
    margin-bottom: 50px;
    font-size: 28px;
  }
`;

export const List = styled.ul``;

export const Item = styled.li`
  margin-bottom: 80px;
  display: flex;
  flex-flow: row wrap;

  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
    flex-direction: column;
  }
`;

export const Time = styled.p`
  margin-right: 32px;
  min-width: 90px;
  font-size: 24px;
  line-height: 24px;
  color: #2f8ed9;
  font-weight: 700;

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 19.2px;
  }
`;

export const Content = styled.div`
  max-width: 62%;

  @media screen and (max-width: 767px) {
    max-width: 100%;
  }
`;

export const Title = styled.b`
  font-size: 24px;
  line-height: 28.8px;
  font-weight: 700;

  @media screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 19.2px;
  }
`;

export const StyledButton = styled(Btn)`
  margin-top: 100px;
  margin-left: 117px;

  @media screen and (max-width: 767px) {
    margin-top: 60px;
    margin-left: 0;
  }
`;
