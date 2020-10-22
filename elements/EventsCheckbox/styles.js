import styled from 'styled-components';

export const Wrapper = styled.div`
  input:checked ~ label {
    color: ${props => props.color};

    &::before {
      border-color: ${props => props.color};
    }

    &::after {
      content: '';
      position: absolute;
      width: 11px;
      height: 9px;
      left: 5px;
      top: 50%;
      transform: translateY(-50%);
      mask: url('icons/checked.svg') no-repeat 50% 50%;
      mask-size: 11px 9px;
      background-color: ${props => props.color}; 
    }
  }
`;

export const Label = styled.label`
  padding-left: 30px;
  font-size: 20px;
  line-height: 26.8px;

  @media (max-width: 910px) {
    font-size: 14px;
    line-height: 18.76px;
  }

  &::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    width: 20px;
    height: 20px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    border: 2px solid rgba(31, 32, 42, 0.3);
  }
`;