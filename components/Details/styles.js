import styled from 'styled-components';
import { TitleH3, SmallText, Subtitle, Icon, Btn } from 'elements';

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 14px;
  padding-top: 162px;
  margin-bottom: 92px;
  margin-right: 24px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-gap: 80px;
    padding-top: 80px;
    margin-right: 0;
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 44px;
  }
`;

export const H3 = styled(TitleH3)`
  margin-bottom: 32px;

  @media screen and (max-width: 420px) {
    margin-bottom: 14px;
  }
`;

export const Text = styled(SmallText)`
  width: 78%;
  margin-bottom: 20px;
  line-height: 158%;
  white-space: pre-wrap;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 8px;
  }
`;

export const List = styled.ul`
  margin-top: 54px;
  margin-bottom: 96px;

  @media screen and (max-width: 1024px) {
    margin-top: 40px;
    margin-bottom: 50px;
  }
`;

export const Element = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 420px) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const StyledIcon = styled(Icon)`
  width: 38px;
  height: 38px;
  margin-right: 20px;
  background-size: 60%;

  @media screen and (max-width: 420px) {
    width: 33px;
    height: 33px;
    margin-right: 10px;
    background-size: 48%;
  }
`;

export const ListText = styled.p`
  font-size: 18px;

  @media screen and (max-width: 420px) {
    font-size: 14px;
  }
`;

export const StyledSubtitle = styled(Subtitle)`
  margin-bottom: 40px;
  line-height: 158%;
  white-space: pre-wrap;

  @media screen and (max-width: 420px) {
    margin-bottom: 14px;
    font-size: 14px;
    line-height: 131%;
  }
`;

export const Button = styled(Btn)`
  border-color: #fb5235;

  &:hover {
    border-color: #ec381a;
  }
`;

export const Links = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 58px;
  margin-bottom: 80px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 50px;
  }

  @media screen and (max-width: 420px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

export const LinkElement = styled.li`
  margin-right: 40px;
  margin-bottom: 20px;

  @media screen and (max-width: 420px) {
    margin-right: 30px;
  }
`;

export const Link = styled.a`
  color: #53b443;
  font-size: 18px;
  line-height: 120%;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover,
  &:active {
    color: #339722;
  }

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 158%;
  }
`;

export const Image = styled.img`
  @media screen and (max-width: 420px) {
    width: 100vw;
    margin-right: -30px;
    margin-left: -30px;
  }
`;
