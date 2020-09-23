import styled from 'styled-components';
import { TitleH4, SmallText } from 'elements';

export const Wrapper = styled.a`
  max-width: 350px;
  box-sizing: border-box;
  margin-bottom: 80px;
  &:not(:last-child) {
    margin-right: 80px;
  }

  @media screen and (max-width: 420px) {
    margin-right: 0;
  }
`;

export const Title = styled(TitleH4)`
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 8px;
  }
`;

export const StyledSubtitle = styled.p`
  opacity: 0.5;
  margin-bottom: 8px;
`;

export const Text = styled(SmallText)`
  margin-bottom: 50px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 20px;
  }
`;

export const Picture = styled.img`
  max-width: 350px;
  margin-bottom: 30px;

  @media screen and (max-width: 420px) {
    margin-bottom: 20px;
  }
`;

export const Span = styled.span`
  font-size: 16px;
  line-height: 131%;
  color: rgba(83, 180, 67, 0.8);
  position: relative;
  padding-left: 20px;

  &::before {
    content: '';
    position: absolute;
    width: 7px;
    height: 7px;
    background-color: rgb(83, 180, 67);
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 20px;
  }
`;
