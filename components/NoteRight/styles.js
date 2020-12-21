import styled from 'styled-components';
import { Subtitle, TitleH4 } from 'elements';

export const Card = styled.div`
  background-color: #f7f8f9;
  padding: 30px 30px 65px 85px;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-end;
  align-items: flex-start;
  background-image: url('/images/yellow-circle.svg');
  background-repeat: no-repeat;
  background-position: 40px bottom;
  min-height: 240px;
  cursor: pointer;
  transition: all 0.3s ease;
  max-width: 580px;

  @media screen and (max-width: 540px) {
    margin-bottom: 30px;
    background-position: left 10px;
    padding: 30px 30px 40px;
    background-image: url('/images/blue-rectangle-mobile.svg');
    min-height: 0;
  }

  svg {
    path {
      transition: all 0.3s ease;

      :first-child {
        fill: white;
        stroke: #201f2a;
      }

      :last-child {
        fill: black;
        stroke: none;
      }
    }
  }

  &:hover {
    path:first-child {
      fill: red;
      stroke: #53b443;
    }

    path:last-child {
      fill: #ffffff;
      stroke: #ffffff;
    }
  }

  &:active {
    path:first-child {
      fill: #339722;
      stroke: #339722;
    }

    path:last-child {
      stroke: #ffffff;
      fill: #ffffff;
    }
  }
`;

export const Img = styled.img`
  max-width: 120px;
  margin-right: 30px;

  @media screen and (max-width: 540px) {
    max-width: 74px;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 25px;

  @media screen and (max-width: 540px) {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 0;
  }
`;

export const Wrapper = styled.div`
  max-width: 244px;
`;

export const StyledLink = styled.a`
  width: 38px;
  height: 38px;
  margin-left: 33px;
  display: block;

  @media screen and (max-width: 540px) {
    margin-left: auto;
  }
`;

export const H4 = styled(TitleH4)`
  min-width: 221px;
`;

export const StyledSubtitle = styled(Subtitle)`
  margin-bottom: 8px;
`;
