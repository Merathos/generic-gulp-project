import styled from 'styled-components';

export const Title = styled.button`
  font-size: 20px;
  line-height: 134%;

  @media screen and (max-width: 420px) {
    font-size: 16px;
    line-height: 134%;
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 30px;
`;

export const Item = styled.li`
  font-size: 16px;
  line-height: 190%;
  opacity: 0.5;

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 190%;
    margin-bottom: 16px;
  }
`;

export const List = styled.ul`
  padding-left: 20px;

  @media screen and (max-width: 420px) {
    padding-left: 12px;
  }
`;