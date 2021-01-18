import styled from 'styled-components';
import { TitleH4, Subtitle } from 'elements';

export const Wrapper = styled.a`
  background-color: ${props => props.background || 'transparent'};
  padding: 40px 40px 0;
  max-width: 350px;
  box-sizing: border-box;
  min-height: 400px;

  @media screen and (max-width: 420px) {
    min-height: 320px;
  }
`;

export const Title = styled(TitleH4)`
  margin-bottom: 80px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 50px;
  }
`;

export const StyledSubtitle = styled.p`
  opacity: 0.5;
  margin-bottom: 4px;
`;

export const Picture = styled.img`
  max-width: 190px;
  margin-left: 80px;

  @media screen and (max-width: 1024px) {
    margin-left: 0;
  }
`;