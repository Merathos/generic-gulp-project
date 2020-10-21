import styled from 'styled-components';
import { TitleH1 } from 'elements';

export const Main = styled.main`
  
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 45px;
`;

export const Grid = styled.div`
  padding-top: 200px;

  @media (min-width: 1000px) {
        display: grid;
        grid-template-columns: minmax(210px, 312px) 862px;
        grid-column-gap: 20px;
        grid-template-areas:
        "sidebar   content";
    }
`;

export const Aside = styled.aside`
  grid-area: sidebar;
  align-self: start;
  padding-top: 22px;

  /* @media (min-width: 1207px) {
    position: sticky;
    top: 200px;
  } */
`;

export const ContentWrapper = styled.div`
  grid-area: content;
  width: 100%;
`;

export const Title = styled(TitleH1)`
  margin-bottom: 100px;

  @media screen and (max-width: 420px) {
    margin-bottom: 30px;
  }
`;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  min-height: 32px;
  margin-bottom: 100px;

  @media screen and (max-width: 420px) {
    margin-bottom: 80px;
  }
`;



