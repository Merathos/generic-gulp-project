import styled from 'styled-components';

export const Wrapper = styled.div.attrs(props => ({
  checkbox: props.checked ? "url('icons/checked.svg')" : 'none',
  color: props.checked ? '#53B443;' : 'rgba(31, 32, 42, 0.3)'
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
    background-position: center center;
    background-repeat: no-repeat;
    border: 2px solid rgba(31, 32, 42, 0.3);
    border-color: ${props => props.color};
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 0;
    font-size: 14px;
    line-height: 134%;
  }
`;