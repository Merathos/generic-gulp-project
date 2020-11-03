import styled from 'styled-components';
import TitleH3 from 'elements/TitleH3';

export const Section = styled.section`
  margin-bottom: 100px;
  max-width: 850px;

  @media screen and (max-width: 420px) {
    margin-bottom: 50px;
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 40px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 147px;
    height: 147px;
    border-radius: 50%;
    left: -75px;
    top: -75px;
    background-color: #f7F8F9;
    z-index: -1;
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 20px;
  }
`;

export const NormalList = styled.ul`
  display: flex;
  max-width: 850px;

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

export const BlueText = styled.p`
  opacity: 0.5;
  font-size: 18px;
  line-height: 131%;

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 131%;
  }
`; 

export const H3 = styled(TitleH3)`
  margin-bottom: 30px;

  @media screen and (max-width: 420px) {
    margin-bottom: 10px;
  }
`; 

export const Element = styled.li`
  max-width: 364px;

  &:not(:last-child) {
    margin-right: 100px;
  }

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
    margin-bottom: 30px;
  }
`;