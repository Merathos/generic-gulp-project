import styled from 'styled-components';
import { TitleH2 } from 'elements';

export const Container = styled.div`
  padding: 165px 100px 160px 125px;

  @media screen and (max-width: 1024px) {
    padding: 100px 60px 60px;
  }

  @media screen and (max-width: 420px) {
    padding: 80px 30px 40px;
  }
`;

export const Title = styled(TitleH2)`
  margin-bottom: 120px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 60px;
  }

  @media screen and (max-width: 960px) {
    font-size: 40px;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 420px) {
    font-size: 28px;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;

  @media screen and (max-width: 1360px) {
    justify-content: flex-start;
  }
`;
