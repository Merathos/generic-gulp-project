import styled from 'styled-components';
import { TitleH2, TitleH4, Icon, Subtitle } from 'elements';

export const Title = styled(TitleH2)`
  margin-bottom: 100px;

  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 88px 54px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 45px;
  }
`;

export const StyledIcon = styled(Icon)`
  margin-bottom: 40px;
  background-size: 40%;

  @media screen and (max-width: 420px) {
    margin-bottom: 16px;
  }
`;

export const H4 = styled(TitleH4)`
  margin-bottom: 20px;
  font-weight: 700;

  @media screen and (max-width: 420px) {
    margin-bottom: 10px;
  }
`;

export const Text = styled(Subtitle)`
  font-size: 18px;
  line-height: 148%;

  @media screen and (max-width: 420px) {
    font-size: 14px;
  }
`;
