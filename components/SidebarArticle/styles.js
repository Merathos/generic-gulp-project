import styled from 'styled-components';
import { TitleH4, TitleH5, Icon } from '/elements';

export const Title = styled(TitleH4)`
  margin-bottom: 40px;
  @media screen and (max-width: 420px) {
    grid-area: b;
    margin-bottom: 0;
  }
`;

export const H5 = styled(TitleH5)`
  margin-bottom: 12px;
`;

export const Section = styled.div`
  margin-bottom: 930px;

  @media screen and (max-width: 420px) {
    margin-bottom: 50px;
  }
`;

export const SectionIcon = styled.div`
  /* @media screen and (max-width: 420px) {
    display: none;
  } */
`;

export const SectionButton = styled.div`
  margin: 50px 0;

  @media screen and (max-width: 420px) {
    margin: 40px 0 60px;
  }
`;

export const Text = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;
  margin-bottom: 20px;

  @media screen and (max-width: 420px) {
    font-size: 12px;
    line-height: 120%;
  }
`;

export const StyledIcon = styled(Icon)`
  margin-bottom: 26px;
`;

export const Image = styled.img`
  width: 143px;
  margin-bottom: 30px;
  position: relative;

  @media screen and (max-width: 420px) {
    width: 74px;
    grid-area: a;
  }
`;

export const Aside = styled.aside`
  padding-top: 30px;
  @media screen and (max-width: 420px) {
    display: grid;
    grid-template-areas:
      'a b'
      'a c';
    grid-column-gap: 20px;
    grid-row-gap: 8px;
  }
`;