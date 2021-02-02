import styled from 'styled-components';
import { TitleH2 } from 'elements';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 65% 21%;
  grid-gap: 60px;
  justify-content: space-between;

  @media screen and (max-width: 1360px) {
    grid-template-columns: 65% 25%;
    grid-gap: 20px;
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: 65% 30%;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-gap: 60px;
  }

  @media screen and (max-width: 1024px) {
    grid-gap: 30px;
  }
`;

export const Title = styled(TitleH2)`
  margin-bottom: 40px;
  margin-top: 30px;

  @media screen and (max-width: 1024px) {
    margin-top: 0;
  }

  @media screen and (max-width: 768px) {
    font-size: 28px;
    line-height: 130%;
    margin-bottom: 22px;
  }
`;

export const StyledText = styled.p`
  margin-bottom: 80px;
  font-size: 18px;
  line-height: 158%;

  @media screen and (max-width: 1024px) {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    width: 90%;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 30px;
  max-width: 550px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
`;

export const Item = styled.li`
  padding-left: 32px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 2px solid #2f8ed9;
    top: 12px;
  }

  @media screen and (max-width: 768px) {
    padding-left: 26px;

    &:nth-of-type(even) {
      order: 5;
    }

    &:before {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      border: 2px solid #2f8ed9;
      top: 46%;
    }
  }

  @media screen and (max-width: 420px) {
    &:before {
      top: 40%;
    }
  }
`;
