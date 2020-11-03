import styled from 'styled-components';
import TitleH4 from 'elements/TitleH4';
import Subtitle from 'elements/Subtitle';

export const Article = styled.article`
  background-image: url('/backgrounds/grey-square-sidebar.png');
  background-repeat: no-repeat;
  background-position: 70% 0;
  margin-bottom: 110px;
  width: 250px;

  @media screen and (max-width: 1024px) {
    background-position: 10% 0;
    background-size: 70px 65px;
    width: 300px;
    margin: 0 auto 50px;
  }
`;

export const Img = styled.img`
  max-width: 120px;
  margin-bottom: 30px;

  @media screen and (max-width: 1024px) {
    width: 74px;
    height: 74px;
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

export const H4 = styled(TitleH4)`
  margin-bottom: 12px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 8px;
  }
`;

export const StyledLink = styled.button`
  width: 20px;
  height: 20px;
  margin-right: 20px;
`;

export const Arrows = styled.div`
  display: flex;

  @media screen and (max-width: 1024px) {
    padding-left: 94px;
  }
`;

export const Text = styled(Subtitle)`
  margin-bottom: 40px;
`;

export const Element = styled.div`
  min-width: 254px;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    min-width: 300px;
  }
`;