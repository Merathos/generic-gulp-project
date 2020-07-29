import styled from 'styled-components';
import { Subtitle, TitleH4 } from 'elements';

export const Card = styled.div`
  background-color: #F7F8F9;
  padding: 30px 100px 65px 30px;
  display: flex;
  box-sizing: border-box;
  justify-content: ${props => props.position || 'flex-start'};
  background-image: url('/images/blue-rectangle.svg');
  background-repeat: no-repeat;
  background-position: 20px bottom;
  min-height: 240px;

  @media screen and (max-width: 420px) {
    display: none;
  }
`;

export const H4 = styled(TitleH4)`
  min-width: 221px;
`;

export const Img = styled.img`
  max-width: 120px;
  margin-right: 30px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 25px;
`;

export const Wrapper = styled.div`
  max-width: 244px;
`;

export const StyledLink = styled.a`
  width: 38px;
  height: 38px;
  margin-right: 16px;
  display: block;
`;

export const StyledSubtitle = styled(Subtitle)`
  margin-bottom: 8px;
`;