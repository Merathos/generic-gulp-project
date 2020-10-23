import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Square = styled.div`
  width: 233px;
  height: 233px;
  margin-left: auto;
  margin-top: 50px;
  background-color: #f7f8f9;
`;

export const Circle = styled.div`
  position: absolute;
  top: -50px;
  left: 100px;
  border-radius: 50%;
  width: 122px;
  height: 122px;
  background-color: #fb5235;
`;

export const LeftBottom = styled.div`
  position: absolute;
  top: 65px;
  left: 25px;
  transform: rotate(225deg);
`;

export const TopLeft = styled.div`
  position: absolute;
  top: -165px;
  left: 15px;
  transform: rotate(-45deg);
`;

export const TopRight = styled.div`
  position: absolute;
  top: -155px;
  left: 240px;
  transform: rotate(45deg);
`;

export const Sector = styled.div`
  width: 58px;
  height: 58px;
  background-color: ${props => props.color};
  clip-path: circle(50% at 100% 100%);
  transform: rotate(45deg);
`;
