import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 28px;
  font-weight: 500;
  font-size: 20px;
  line-height: 134%;

  &:last-of-type {
    margin-bottom: 40px;
  }

  input:hover ~ label {
    &::before {
      border-color: #53b443;
    }
  }

  input:active ~ label {
    &::before {
      border-color: #339722;
    }
  }

  @media screen and (max-width: 768px) {
    &:not(:last-of-type) {
      margin-right: 24px;
    }
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 0;
    font-size: 14px;
    line-height: 134%;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const Label = styled.label.attrs(props => ({
  checkbox: props.checked ? "url('/icons/checked.svg')" : 'none',
  color: props.checked ? '#53B443;' : 'rgba(31, 32, 42, 0.3)',
}))`
  padding-left: 30px;
  position: relative;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-image: ${props => props.checkbox};
    background-position: center center;
    background-repeat: no-repeat;
    border: 2px solid rgba(31, 32, 42, 0.3);
    border-color: ${props => props.color};
    transition: border-color 0.3s ease;
  }

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 190%;
  }
`;

export const DropLabel = styled.label`
  position: relative;
  padding-left: 20px;
  display: flex;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.3s ease;

  &:hover {
    color: #53b443;
  }

  &:active {
    color: #339722;
  }

  &::after {
    content: '';
    position: absolute;
    width: 7px;
    height: 7px;
    top: 50%;
    left: 0;
    background-color: #53b443;
    transform: translateY(-50%);
    border-radius: 50%;
    display: none;
  }

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 190%;
    padding-left: 14px;

    &::after {
      width: 5px;
      height: 5px;
    }
  }
`;
