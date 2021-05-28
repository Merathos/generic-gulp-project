import styled from 'styled-components';
import { TitleH3 } from 'elements';

export const Picture = styled.img`
  margin-bottom: 30px;
  max-height: 245px;

  @media screen and (max-width: 960px) {
    max-height: 314px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 600px) {
    max-height: 363px;
  }
`;

export const Title = styled(TitleH3)`
  margin-bottom: 33px;

  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 28px;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 22px;
  }
`;
