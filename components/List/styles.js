import styled from 'styled-components';

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
    background-color: #f7f8f9;
    z-index: -1;
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 20px;
  }
`;

export const NormalList = styled.ul`
  max-width: 850px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 100px;

  @media screen and (max-width: 545px) {
    grid-template-columns: 1fr;
    grid-gap: 100px;
  }
`;

export const BlueList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 50px;

  @media (max-width: 420px) {
    grid-template-columns: repeat(auto-fill, minmax(141px, 1fr));
    grid-gap: 30px;
  }
`;

export const BlueTitle = styled.b`
  color: #2f8ed9;
  margin-bottom: 13px;
  font-size: 34px;
  line-height: 120%;
  font-weight: 600;
  display: block;

  @media screen and (max-width: 420px) {
    font-size: 22px;
    line-height: 120%;
  }
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

export const H3 = styled.b`
  display: block;
  margin-bottom: 30px;
  font-size: 34px;
  line-height: 120%;
  font-weight: 600;

  @media screen and (max-width: 420px) {
    font-size: 22px;
    line-height: 120%;
    margin-bottom: 10px;
  }
`;

export const Element = styled.li`
  max-width: 390px;

  /* &:not(:last-child) {
    margin-right: 100px;
  } */

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
