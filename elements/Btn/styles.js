import styled, { css } from 'styled-components';

export const Button = styled.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px 32px;
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
  text-align: center;
  color: #fb5235;
  border: 2px solid rgba(32, 31, 42, 0.1);
  border-radius: 8px;
  max-width: 408px;
  transition: all 0.3s ease-in;

  @media screen and (max-width: 767px) {
    font-size: 12px;
    line-height: 14px;
    padding: 20px 33px;
    max-width: 299px;
  }

  &:hover {
    border-color: #fb5235;
  }

  &:active {
    color: #ec381a;
    border-color: #ec381a;
  }

  ${(props) =>
    props.accent &&
    css`
      background-color: #fb5235;
      color: #ffffff;
      max-width: 243px;

      @media screen and (max-width: 767px) {
        max-width: 191px;
      }

      &:hover,
      &:active {
        background-color: #ec381a;
        color: #ffffff;
      }
    `}
`;
