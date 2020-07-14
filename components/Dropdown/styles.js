import styled from 'styled-components';

export const Title = styled.button.attrs(props => ({
  transform: props.active
    ? 'rotate(-180deg) translateY(50%)'
    : 'translateY(-50%)'
}))`
  padding: 15px 0;
  position: relative;
  font-size: 20px;
  line-height: 134%;
  text-align: left;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    width: 14px;
    height: 7px;
    top: 50%;
    right: 0;
    background-image: url('icons/dropdown.svg');
    background-repeat: no-repeat;
    transform: ${props => props.transform};
    transition: transform 0.2s ease;
  }

  @media screen and (max-width: 420px) {
    font-size: 16px;
    line-height: 134%;
  }
`;

export const Item = styled.li`
  font-size: 16px;
  line-height: 190%;
  opacity: 0.5;

  input:checked ~ label {
    color: #53B443;
  
    &::after {
      display: block;
    }
  }

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 190%;
    margin-bottom: 16px;
    padding-left: 12px;
  }
`;

export const List = styled.ul`
  height: 180px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    opacity: 0;
  }
`;

export const Label = styled.label`
  position: relative;
  padding-left: 20px;

  &::after {
    content: '';
    position: absolute;
    width: 7px;
    height: 7px;
    top: 50%;
    left: 0;
    background-color: #53B443;
    transform: translateY(-50%);
    border-radius: 50%;
    display: none;
  }
`;