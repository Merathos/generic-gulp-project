import styled from 'styled-components';

export const Wrapper = styled.div.attrs(props => ({
  checkbox: props.checked
    ? "url('icons/checked.svg')" // wrong icon
    : "url('icons/checkbox.svg')"
}))`
  margin-bottom: 28px;
  font-weight: 500;
  font-size: 20px;
  line-height: 134%;
  padding-left: 30px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-image: ${props => props.checkbox};
    background-repeat: no-repeat;
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 0;
    font-size: 14px;
    line-height: 134%;
  }
`;