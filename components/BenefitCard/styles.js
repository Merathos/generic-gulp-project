import styled from 'styled-components';
import { TitleH3 } from 'elements';

export const Picture = styled.img`
  margin-bottom: 30px;

  @media screen and (max-width: 724px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;

export const Title = styled(TitleH3)`
  margin-bottom: 33px;

  @media screen and (max-width: 724px) {
    margin-bottom: 10px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 28px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 22px;
  }
`;
