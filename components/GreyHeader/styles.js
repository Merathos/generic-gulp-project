import styled from 'styled-components';
import { TitleH1, TitleH3, Text, SmallText } from 'elements';

export const Grid = styled.div`
  display: flex;
  padding-top: 240px;
  padding-bottom: 100px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding-top: 110px;
    padding-bottom: 80px;
  }
`;

export const Wrapper = styled.article`
  margin-right: 92px;
  max-width: 854px;

  @media screen and (max-width: 420px) {
    margin-right: 0;
  }
`;

export const Aside = styled.aside`
  width: 254px;

  @media screen and (max-width: 420px) {
    width: 100%;
  }
`;

export const Paragraph = styled(Text)`
  margin-bottom: 140px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 60px;
  }
`;

export const Title = styled(TitleH1)`
  /* display: flex;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  } */
`;

export const Features = styled.ul`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

// export const List = styled.div`
//   display: flex;

//   @media screen and (max-width: 1024px) {
//     flex-direction: column;
//   }
// `;

export const ListText = styled(SmallText)`
  /* display: flex;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  } */
`;

export const ListTitle = styled(TitleH3)`
  color: #2F8ED9;
  margin-bottom: 12px;

  @media screen and (max-width: 420px) {
    margin-bottom: 10px;
  }
`;

export const Element = styled.li`
  max-width: 270px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 30px;
    max-width: auto;
  }
`;