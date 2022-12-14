import styled from 'styled-components';
import { TitleH3 } from 'elements';

export const Picture = styled.img`
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    width: 50%;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const Title = styled(TitleH3)`
  margin-bottom: 30px;

  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }
`;
