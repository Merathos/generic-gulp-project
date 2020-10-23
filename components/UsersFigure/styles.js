import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Square = styled.div`
  width: 160px;
  height: 160px;
  position: absolute;
  top: 50px;
  right: 60px;
  background-color: #f7f8f9;
  transform: rotate(45deg);
`;

export const Block = styled.div`
  position: absolute;

  ${props =>
    props.position === 'left' &&
    css`
      top: 30px;
      left: 25px;
    `};

  ${props =>
    props.position === 'top' &&
    css`
      top: -45px;
      left: 150px;
      transform: rotate(30deg);
    `};

  ${props =>
    props.position === 'right' &&
    css`
      top: 25px;
      left: 280px;
      transform: scaleX(-1) rotate(-15deg);
    `}
  
  ${props =>
    props.position === 'middle-left' &&
    css`
      display: flex;
      top: 5px;
      left: 85px;
      transform: rotate(-30deg);
    `}
  
  ${props =>
    props.position === 'middle-right' &&
    css`
      display: flex;
      top: 15px;
      left: 250px;
      transform: rotate(35deg);
    `}
`;

export const Circle = styled.div`
  width: ${props => (props.color === '#FB5235' ? '46px' : '9px')};
  height: ${props => (props.color === '#FB5235' ? '46px' : '9px')};
  border-radius: 50%;
  background-color: ${props => props.color};

  ${props =>
    props.color === '#FB5235' &&
    css`
      position: absolute;
      top: 65px;
      left: 165px;
    `}

  ${props =>
    props.color === '#2F8ED9' &&
    css`
      margin-right: 25px;
    `}
`;
