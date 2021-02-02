import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input:checked ~ label {
    color: ${(p) => (p.color ? p.color : '#53b443')};

    &::before {
      border-color: ${(p) => (p.color ? p.color : '#53b443')};
    }

    &::after {
      content: '';
      position: absolute;
      width: 11px;
      height: 9px;
      left: 5px;
      top: 50%;
      transform: translateY(-50%);
      mask: url('/icons/checked.svg') no-repeat 50% 50%;
      mask-size: 11px 9px;
      background-color: ${(p) => (p.color ? p.color : '#53b443')};

      @media screen and (max-width: 768px) {
        top: 7px;
        transform: translateY(0);
      }
    }
  }

  input:hover ~ label {
    &::before {
      @media screen and (min-width: 1000px) {
        border-color: ${(p) => (p.color ? p.color : '#53b443')};
      }
    }
  }

  ${(props) =>
    props.error &&
    css`
      input ~ label {
        color: #fb5235;
        &::before {
          border-color: #fb5235;
        }
      }
    `};
`;

export const Label = styled.label`
  padding-left: 30px;
  font-size: 20px;
  line-height: 26.8px;
  font-weight: 500;
  cursor: pointer;

  @media screen and (max-width: 910px) {
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
    transition: all 0.3s;

    @media screen and (max-width: 768px) {
      top: 1px;
      transform: translateY(0);
    }
  }
`;
