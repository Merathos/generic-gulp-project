import styled, { css } from 'styled-components';

export const Block = styled.div`
  border-bottom: 1px solid #201f2a;
  display: flex;
  padding: ${props => (props.isMain ? '0' : '25px 0')};
  margin-bottom: 10px;

  ${props =>
    props.isMain &&
    css`
      width: 856px;

      @media screen and (max-width: 1024px) {
        width: 100%;
      }
    `};

  @media screen and (max-width: 420px) {
    padding: ${props => (props.isMain ? '0' : '16px 0')};
  }
`;

export const Field = styled.input`
  width: 100%;
  border: none;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  opacity: 0.5;
  font-family: inherit;
  outline: none;
  transition: all 0.2s ease;

  ${props =>
    props.isMain &&
    css`
      background-color: transparent;
      padding-top: 0;
      padding-bottom: 25px;
    `};

  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    opacity: 1;
    color: #201f2a;
  }

  &:focus ~ button {
    background: #fb5235;

    svg path {
      stroke: #fff;
    }
  }

  @media screen and (max-width: 420px) {
    font-size: 16px;
    line-height: 134%;

    ${props =>
      props.isMain &&
      css`
        padding-bottom: 15px;
      `};
  }
`;

export const Submit = styled.button`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-left: 10px;
  background: #ec381a;
  transition: all 0.2s ease;

  svg path {
    stroke: #fff;
  }

  &:active {
    background-color: #ec381a;
  }

  &:disabled {
    background: transparent;

    svg path {
      stroke: #201f2a;
    }
  }
`;
