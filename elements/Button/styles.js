import styled from 'styled-components';

export const Accent = styled.button`
  font-weight: bold;
  font-size: 18px;
  line-height: 70px;
  background: #fb5235;
  border-radius: 8px;
  padding: 0 32px;
  color: #ffffff;
  display: inline-block;
  transition: all 0.3s ease;

  &:hover,
  &:active {
    background-color: #ec381a;
    color: #ffffff;
  }

  @media screen and (max-width: 767px) {
    font-size: 12px;
    line-height: 56px;
  }
`;

export const Default = styled.button`
  font-weight: bold;
  font-size: 18px;
  line-height: 70px;
  color: #fb5235;
  border: 2px solid rgba(32, 31, 42, 0.1);
  box-sizing: border-box;
  border-radius: 8px;
  padding: 0 32px;
  display: inline-block;
  transition: all 0.3s ease;

  &:hover {
    border-color: #fb5235;
    color: #fb5235;
  }

  &:active {
    border-color: #ec381a;
    color: #ec381a;
  }

  @media screen and (max-width: 767px) {
    font-size: 12px;
    line-height: 56px;
  }
`;
