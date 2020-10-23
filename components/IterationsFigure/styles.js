import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Block = styled.div`
  position: absolute;
  top: 45px;
  left: 70px;
`;

export const Sector = styled.div`
  position: absolute;
  top: -25px;
  left: 40px;
  width: 250px;
  height: 250px;
  background-color: #f7f8f9;
  clip-path: circle(50% at 100% 100%);
  transform: rotate(90deg);
`;

export const Circle = styled.div`
  width: ${props => (props.size === 'small' ? '12px' : '125px')};
  height: ${props => (props.size === 'small' ? '12px' : '125px')};
  border-radius: 50%;
  background-color: ${props =>
    props.size === 'small' ? '#2F8ED9' : '#fb5235'};

  ${props =>
    props.position === 'middle' &&
    css`
      position: absolute;
      top: 0;
      left: 0;
    `}

  ${props =>
    props.state === 'single' &&
    css`
      position: absolute;
      top: -15px;
      left: 15px;
    `}
`;

export const Group = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40px;

  ${props =>
    props.position === 'top' &&
    css`
      position: absolute;
      top: -10px;
      left: 120px;
      transform: rotate(-45deg);
    `}

  ${props =>
    props.position === 'bottom' &&
    css`
      position: absolute;
      top: 130px;
      left: 110px;
      transform: rotate(45deg);
    `}
`;

export const Square = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${props => props.color};

  ${props =>
    props.color === '#5FAF52' &&
    css`
      position: absolute;
      top: -75px;
      left: -35px;
    `}
    
    ${props =>
      props.color === '#2F8ED9' &&
      css`
        position: absolute;
        top: -80px;
        left: 165px;
      `}
    
    ${props =>
      props.color === '#FEB251' &&
      css`
        position: absolute;
        top: 160px;
        left: 155px;
      `}
`;
