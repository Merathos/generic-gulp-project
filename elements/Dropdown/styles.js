import styled from 'styled-components';

export const Title = styled.button.attrs(props => ({
  transform: props.active ? 'rotate(-180deg) translateY(50%)' : 'translateY(-50%)'
}))`
  padding: 15px 0;
  position: relative;
  font-size: 20px;
  line-height: 134%;
  text-align: left;

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

export const Item = styled.li.attrs(props =>({
  active: props.active ? '#53B443;' : '#201F2A;',
  dot: props.active ? 'block' : 'none'
}))`
  font-size: 16px;
  line-height: 190%;
  opacity: 0.5;
  color: ${props => props.active};
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
    display: ${props => props.dot};
  }

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 190%;
    margin-bottom: 16px;
    padding-left: 12px;
  }
`;