import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Sector = styled.div`
  position: absolute;
  top: 0;
  left: 125px;
  width: 320px;
  height: 320px;
  background-color: #f7f8f9;
  clip-path: circle(50% at 100% 100%);
  transform: rotate(90deg);
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 365px;
  position: absolute;
  top: -120px;
  left: 30px;
`;

export const Square = styled.div`
  width: 84px;
  height: 84px;
  background-color: #feb251;
`;
