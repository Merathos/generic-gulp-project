import styled from 'styled-components';

export const Title = styled.button.attrs(props => ({
  transform: props.active
    ? 'rotate(-180deg) translateY(50%)'
    : 'translateY(-50%)',
}))`
  padding: 16px 0;
  position: relative;
  font-size: 20px;
  font-weight: 500;
  line-height: 134%;
  text-align: left;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    width: 14px;
    height: 7px;
    top: 50%;
    right: 32px;
    background-image: url('icons/dropdown.svg');
    background-repeat: no-repeat;
    transform: ${props => props.transform};
    transition: transform 0.2s ease;
  }

  @media screen and (max-width: 768px) {
    padding: 14px 0;

    &::after {
      right: 0;
    }
  }

  @media screen and (max-width: 420px) {
    font-size: 16px;
    line-height: 134%;
  }
`;

export const Sup = styled.sup`
  margin-left: 6px;
  font-size: 14px;
  line-height: 1.2;
  color: #53b443;
  vertical-align: top;
`;

export const Item = styled.li`
  margin-bottom: 10px;

  input:checked ~ label {
    color: #53b443;
    opacity: 1;

    &::after {
      display: block;
    }
  }

  &:last-of-type {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 190%;
    margin-bottom: 16px;
  }
`;

export const List = styled.ul`
  position: relative;
  height: 172px;
  padding-bottom: 15px;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
    -webkit-appearance: none;
    width: 0;
    height: 0;
  }

  @media screen and (max-width: 768px) {
    height: 200px;
  }
`;

export const Wrapper = styled.div`
  position: relative;

  &::after {
    content: '';
    width: 100%;
    height: 40px;
    position: absolute;
    bottom: 10px;
    left: 0;
    z-index: 1;
    background: linear-gradient(
      360deg,
      #ffffff 49.12%,
      rgba(255, 255, 255, 0) 121.93%
    );
  }

  @media screen and (max-width: 768px) {
    &::after {
      background: ${props =>
        props.withBg
          ? 'linear-gradient(360deg, #f7f8f9 49.12%, rgba(247, 248, 249, 0) 121.93%)'
          : 'linear-gradient(360deg, #FFFFFF 49.12%, rgba(255, 255, 255, 0) 121.93%)'};
    }
  }
`;
