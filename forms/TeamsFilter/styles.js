import styled from 'styled-components';

export const Title = styled.h3.attrs((props) => ({
  transform: props.active
    ? 'rotate(-180deg) translateY(50%)'
    : 'translateY(-50%)',
}))`
  padding: 15px 0;
  position: relative;
  font-size: 20px;
  line-height: 134%;
  text-align: left;
  width: 100%;
  font-weight: 500;

  @media screen and (max-width: 960px) {
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      width: 14px;
      height: 7px;
      top: 50%;
      right: 0;
      background-image: url('/icons/dropdown.svg');
      background-repeat: no-repeat;
      transform: ${(props) => props.transform};
      transition: transform 0.2s ease;
    }
  }

  @media screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 134%;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const Sup = styled.sup`
  margin-left: 6px;
  font-size: 14px;
  line-height: 1.2;
  color: #53b443;
  vertical-align: top;

  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
`;

export const Item = styled.li`
  margin-bottom: 10px;

  input:hover ~ label {
    opacity: 1;
  }

  input:checked ~ label {
    opacity: 1;
    color: #53b443;

    &::after {
      display: block;
    }
  }

  &:first-of-type {
    margin-top: 20px;
  }

  &:last-of-type {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 190%;
    margin-bottom: 16px;
    padding-left: 12px;
  }
`;

export const List = styled.ul`
  position: relative;
  height: 450px;
  min-width: 225px;
  padding-bottom: 15px;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
    -webkit-appearance: none;
    width: 0;
    height: 0;
  }

  scrollbar-width: thin;
  scrollbar-color: #53b443 #f7f8f9;

  &::before {
    content: '';
    width: 100%;
    height: 40px;
    position: absolute;
    top: -16px;
    left: 0;
    z-index: 1;
    background: linear-gradient(
      360deg,
      #ffffff 49%,
      rgba(255, 255, 255, 0) 122%
    );
    transform: rotate(-180deg);
    pointer-events: none;
  }

  &::after {
    content: '';
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 10px;
    left: 0;
    z-index: 1;
    background: linear-gradient(
      360deg,
      #ffffff 49%,
      rgba(255, 255, 255, 0) 122%
    );
    pointer-events: none;
  }

  @media screen and (max-width: 960px) {
    display: ${(props) => (props.active ? 'block' : 'none')};

    &::after,
    &::before {
      background: linear-gradient(
        360deg,
        #f7f8f9 49.12%,
        rgba(247, 248, 249, 0) 121.93%
      );
    }
  }

  @media screen and (max-width: 767px) {
    max-height: 230px;
    margin-top: 22px;
  }
`;

export const ResetButtonWrapper = styled.div`
  margin-top: 26px;
  padding-left: 20px;

  @media screen and (max-width: 960px) {
    margin-top: 18px;
    display: ${(props) => (props.active ? 'block' : 'none')};
  }
`;

export const Wrapper = styled.div`
  position: relative;
  padding-bottom: 20px;

  @media screen and (max-width: 960px) {
    margin-left: -45px;
    margin-right: -45px;
    padding: ${(props) => (props.active ? '16px 45px 50px' : '16px 45px')};
    background-color: #f7f8f9;
    z-index: 3;
  }

  @media screen and (max-width: 767px) {
    margin-left: -30px;
    margin-right: -30px;
    padding: 16px 30px;
  }
`;

export const Label = styled.label`
  position: relative;
  padding-left: 20px;
  cursor: pointer;

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
`;
