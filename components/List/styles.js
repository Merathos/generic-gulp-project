import styled from 'styled-components';
import TitleH3 from 'elements/TitleH3';
import Text from 'elements/Text';

export const Section = styled.section`
  margin-bottom: 110px;

  @media screen and (max-width: 420px) {
    margin-bottom: 50px;
  }
`;

export const Img = styled.img`
  margin-bottom: 40px;

  @media screen and (max-width: 420px) {
    margin-bottom: 20px;
  }
`;

export const NormalList = styled.ul`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;

export const BlueList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;

  @media (max-width: 420px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }
`;

export const BlueTitle = styled(TitleH3)`
  color: #2F8ED9;
  margin-bottom: 13px;
`; 

export const BlueText = styled(Text)`
  opacity: 0.5;
`; 

export const H3 = styled(TitleH3)`
  margin-bottom: 30px;
`; 

export const Element = styled.li`
  width: 384px;
  margin-right: 60px;

  @media screen and (max-width: 420px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const NormalText = styled.p`
  font-size: 18px;
  line-height: 158%;

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 158%;
  }
`;