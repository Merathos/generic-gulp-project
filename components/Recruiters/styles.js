import styled from 'styled-components';
import { TitleH2, TitleH3 } from 'elements';

export const Section = styled.section`
  margin-bottom: 100px;
  max-width: 850px;

  @media screen and (max-width: 420px) {
    margin-bottom: 50px;
  }
`;

export const H2 = styled(TitleH2)`
  margin-bottom: 20px;
`;

export const H3 = styled(TitleH3)`
  margin-bottom: 20px;

  @media screen and (max-width: 420px) {
    margin-bottom: 10px;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 120%;
  opacity: 0.5;

`;

export const Picture = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Clip = styled.div`
  width: 350px;
  height: 250px;
  overflow: hidden;
  position: relative;
  margin-bottom: 30px;

  @media screen and (max-width: 420px) {
    width: 325px;
    height: 235px;
  }
`;

export const Text = styled.p`
  max-width: 700px;
  font-size: 20px;
  line-height: 158%;

  @media screen and (max-width: 420px) {
    font-size: 16px;
    line-height: 158%;
  }
`;

export const List = styled.ul`
  display: flex;
  padding-top: 100px;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 420px) {
    padding-top: 60px;
  }
`;

export const Element = styled.li`
`;