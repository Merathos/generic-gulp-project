import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const StyledArrowLeft = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #201f2a;
  border-radius: 50%;
  width: ${(props) => (props.smallButton ? '34px' : '38px')};
  height: ${(props) => (props.smallButton ? '34px' : '38px')};
  left: 45px;
  top: 140px;
  transition: all 0.1s ease;

  svg {
    transition: all 0.1s ease;
  }

  &:hover {
    border-color: #53b443;
    background-color: #53b443;
    color: #ffffff;
  }

  &:active {
    border-color: #339722;
    background-color: #339722;
  }

  @media screen and (max-width: 1360px) {
    display: none;
  }
`;

export const GreyContainer = styled.div`
  background-color: #f7f8f9;
  background-repeat: no-repeat;
  background-position: 118% 298%;
  overflow-x: hidden;

  &:first-child {
    margin-bottom: 160px;

    @media screen and (max-width: 420px) {
      margin-bottom: 80px;
    }
  }

  @media screen and (max-width: 420px) {
    background-size: 50% 50%;
    background-position: 150% 120%;
    padding-bottom: 14px;
  }
`;
