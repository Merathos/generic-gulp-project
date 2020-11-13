import styled from 'styled-components';
import { TitleH2 } from 'elements';
import { Text } from 'elements';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 800px 254px;
  grid-gap: 60px;
  justify-content: space-between;

  @media screen and (max-width: 1205px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`;

export const Title = styled(TitleH2)`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 130%;
    margin-bottom: 20px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 70px;
  grid-row-gap: 30px;
  max-width: 600px;

  @media screen and (max-width: 420px) {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
`;

export const StyledText = styled(Text)`
  margin-bottom: 80px;
  @media screen and (max-width: 420px) {
    margin-bottom: 40px;
  }
`;

export const Item = styled.li`
  padding-left: 32px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 2px solid #2f8ed9;
    top: 12px;
  }
  @media screen and (max-width: 420px) {
    &:before {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      border: 2px solid #2f8ed9;
      top: 7px;
    }
  }
`;
