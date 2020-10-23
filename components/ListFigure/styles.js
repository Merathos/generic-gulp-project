import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Circle = styled.div`
  position: absolute;
  top: -80px;
  right: -150px;
  border-radius: 50%;
  width: 448px;
  height: 448px;
  background-color: #f7f8f9;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 260px;
  position: absolute;
  top: 5px;
  left: 32px;
`;

export const Square = styled.div`
  width: 54px;
  height: 54px;
  margin-bottom: 15px;
  margin-right: 15px;
  background-color: #5faf52;
`;

export const Line = styled.div`
  width: 188px;
  height: 54px;
  margin-bottom: 15px;
  background-color: #feb251;
`;
