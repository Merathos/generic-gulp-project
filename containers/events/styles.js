import styled from 'styled-components';
import { Icon, TitleH1, Container } from 'elements';

export const Main = styled.main`
  background-image: url('/backgrounds/events-left.svg'),
    url('/backgrounds/events-right.svg');
  background-position: left 520px, right 70px;
  background-repeat: no-repeat, no-repeat;

  @media screen and (max-width: 1360px) {
    background-image: url('/backgrounds/events-right.svg');
    background-position: right -20px top 32px;
    background-repeat: no-repeat;
  }
`;

export const StyledContainer = styled(Container)`
  @media screen and (max-width: 960px) {
    padding: 0;
  }
`;

export const Grid = styled.div`
  padding-top: 200px;

  @media screen and (min-width: 1201px) {
    display: grid;
    grid-template-columns: minmax(210px, 312px) 1fr;
    grid-template-rows: max-content auto;
    grid-column-gap: 20px;
    grid-template-areas:
      'sidebar   mainTitle'
      'sidebar   content';
  }

  @media screen and (max-width: 767px) {
    padding-top: 110px;
  }
`;

export const Aside = styled.aside`
  grid-area: sidebar;
  align-self: start;
  padding-top: 22px;

  @media screen and (min-width: 1201px) {
    position: sticky;
    top: 200px;
  }

  @media screen and (max-width: 1200px) {
    max-width: 862px;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 960px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media screen and (max-width: 767px) {
    padding-left: 30px;
    padding-right: 30px;
    margin-bottom: 40px;
  }
`;

export const ContentWrapper = styled.div`
  grid-area: content;
  width: 100%;
`;

export const Announcement = styled.div`
  margin-bottom: 60px;
  color: rgba(32, 31, 43, 0.5);

  @media screen and (max-width: 1200px) {
    max-width: 862px;
    margin: 0 auto 60px;
  }

  @media screen and (max-width: 767px) {
    margin-left: 30px;
    margin-right: 30px;
    font-size: 14px;
    line-height: 18.34px;
  }
`;

export const StyledIcon = styled(Icon)`
  display: inline-block;
  vertical-align: middle;
  width: 30px;
  height: 30px;
`;

export const Title = styled(TitleH1)`
  grid-area: mainTitle;
  margin-bottom: ${(p) => (p.bigMarginBottom ? '120px' : '25px')};

  @media screen and (max-width: 1200px) {
    max-width: 862px;
    margin: 0;
  }

  @media screen and (max-width: 960px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media screen and (max-width: 767px) {
    padding-left: 30px;
    padding-right: 30px;
    margin-bottom: 7px;
  }
`;

export const CompletedTitle = styled.h2`
  font-size: 90px;
  line-height: 100px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  margin-bottom: 120px;

  @media screen and (max-width: 1200px) {
    max-width: 862px;
    margin-bottom: 50px;
    font-size: 54px;
    line-height: 130%;
    letter-spacing: 0.03em;
  }

  @media screen and (max-width: 960px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media screen and (max-width: 767px) {
    padding-left: 30px;
    padding-right: 30px;
    font-size: 32px;
    line-height: 42.88px;
    letter-spacing: 0.01em;
  }
`;
