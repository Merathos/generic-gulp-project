import styled, { css } from 'styled-components';
import { TitleH2 } from 'elements';

export const Section = styled.section`
  margin-bottom: 220px;

  @media (max-width: 768px) {
    margin-bottom: 80px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  padding: 0 30px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const Title = styled(TitleH2)`
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 20px;
  }
`;

export const MapWrapper = styled.div`
  padding-top: 50px;
  width: 100%;
  height: ${props => (props.isContacts ? '622px' : '459px')};

  @media (max-width: 768px) {
    padding-top: 40px;
    height: 267px;
  }
`;

export const Wrapper = styled.p`
  margin-bottom: 30px;
  font-size: 20px;
  line-height: 158%;

  @media screen and (max-width: 1024px) {
    font-size: 14px;
    line-height: 158%;
  }

  @media (max-width: 768px) {
    margin-left: 30px;
    margin-right: 30px;
  }
`;

export const Place = styled.span`
  margin-right: 20px;
  opacity: 0.5;

  @media screen and (max-width: 1024px) {
    display: block;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 60px;
  grid-gap: 60px;

  ${props =>
    props.twoColumns &&
    css`
      @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 30px;
        margin-top: 40px;
      }

      @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-gap: 30px;
        margin-top: 40px;
      }
    `};

  @media (max-width: 768px) {
    margin-left: 30px;
    margin-right: 30px;
  }

  @media screen and (max-width: 420px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-gap: 30px;
    margin-top: 40px;
  }
`;
