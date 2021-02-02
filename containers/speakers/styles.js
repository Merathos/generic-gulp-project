import styled from 'styled-components';
import { TitleH2 } from 'elements';

export const Section = styled.section`
  margin-bottom: 100px;

  @media screen and (max-width: 768px) {
    margin-bottom: 45px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  padding: 0 30px;
  margin: 0 auto;

  @media screen and (max-width: 375px) {
    overflow: hidden;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
`;

export const Item = styled.li`
  position: relative;
  margin-right: 80px;
  margin-bottom: 58px;
  max-width: 363px;

  &::after {
    content: '';
    position: absolute;
    top: 168px;
    right: -47px;
    width: 100px;
    height: 86px;
    background-image: url('/backgrounds/speaker-card1.svg');
    background-position: center;
    background-repeat: no-repeat;

    @media screen and (max-width: 768px) {
      width: 74px;
      height: 75px;
      background-position: left top;
      background-size: 75px 75px;
      top: 134px;
      right: -30px;
    }
  }

  &:nth-child(even) {
    &::after {
      background-image: url('/backgrounds/speaker-card2.svg');
      top: 19px;
      right: -37px;

      @media screen and (max-width: 768px) {
        top: 10px;
        right: -23px;
      }
    }
  }

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 768px) {
    margin-right: 45px;
    max-width: 315px;
  }

  @media screen and (max-width: 670px) {
    margin-right: 0;
  }
`;

export const Title = styled(TitleH2)`
  margin-bottom: 100px;

  @media screen and (max-width: 768px) {
    margin-bottom: 59px;
    font-size: 28px;
  }
`;
