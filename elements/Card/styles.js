import styled from 'styled-components';
import { TitleH3 } from 'elements';

export const Picture = styled.img`
  margin-bottom: 40px;

  @media screen and (max-width: 420px) {
    margin-bottom: 20px;
  }
`;

export const Title = styled(TitleH3)`
  margin-bottom: 30px;

  @media screen and (max-width: 420px) {
    margin-bottom: 10px;
  }
`;