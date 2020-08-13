import styled from 'styled-components';
import { Subtitle } from 'elements';

export const Section = styled.section`
  background-color: #F7F8F9;
  padding-top: 160px;
  padding-bottom: 120px;

  @media screen and (max-width: 420px) {
    padding-top: 80px;
    padding-bottom: 0;
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 50px;
  line-height: 120%;
  margin-bottom: 10px;
  transition: color 200ms ease;

  &:hover {
    color: #53B443;
    cursor: pointer;
  }

  @media screen and (max-width: 420px) {
    font-size: 22px;
    line-height: 134%;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  padding: 0 45px;
  margin: 0 auto;

  @media screen and (max-width: 420px) {
    max-width: 375px;
    padding: 0 30px;
    flex-direction: column;
  }

  @media screen and (max-width: 240px) {
    max-width: 320px;
    padding: 0 20px;
  }
`;

export const Text = styled(Subtitle)`
  margin-bottom: 25px;

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 152%;
  }
`;

export const Element = styled.li`
  max-width: 325px;

  @media screen and (max-width: 420px) {
    max-width: auto;
    margin-bottom: 45px;
  }
`;
