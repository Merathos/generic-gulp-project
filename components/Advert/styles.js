import styled from 'styled-components';
import { TitleH3 } from 'elements';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 380px;

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
      fill: #53b443;
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

  @media screen and (max-width: 420px) {
    margin-bottom: 30px;
  }
`;

export const StyledText = styled.p`
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 45px;

  @media screen and (max-width: 420px) {
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 152%;
  }
`;

export const H3 = styled(TitleH3)`
  margin-bottom: 20px;
  font-weight: 700;

  @media screen and (max-width: 420px) {
    margin-bottom: 14px;
  }
`;

export const Arrow = styled.span`
  display: flex;
  margin-top: auto;
  width: 38px;
  height: 38px;

  @media screen and (max-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;
