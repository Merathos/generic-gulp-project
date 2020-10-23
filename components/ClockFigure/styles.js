import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Square = styled.div`
  width: 240px;
  height: 240px;
  position: absolute;
  top: 20px;
  right: 35px;
  background-color: #f7f8f9;
  transform: rotate(30deg);
`;

export const Block = styled.div`
  position: absolute;
  top: -40px;
  left: 35px;
`;
export const Clock = styled.div`
  width: 164px;
  height: 164px;
  border-radius: 50%;
  background-color: #53b443;
`;

export const Arrow = styled.div`
  position: absolute;
  top: 86px;
  left: 80px;
  width: 50px;
  height: 8px;
  background-color: #ffffff;

  :nth-child(2) {
    top: 65px;
    left: 56px;
    transform: rotate(90deg);
  }
`;

export const Flare = styled.div`
  position: absolute;
  top: 65px;
  left: 170px;
  svg {
    fill: #feb251;
  }
`;
