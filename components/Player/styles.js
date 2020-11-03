import styled, { css } from 'styled-components';
import { Subtitle } from 'elements';

export const Block = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Button = styled.button`
  margin-right: 20px;
  padding: ${props => (props.isSpeaker ? '11px 11px 13px 17px' : '15px')};
  width: 57px;
  height: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 50%;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  @media (max-width: 720px) {
    ${props =>
      props.withDynamic &&
      css`
        width: 37px;
        height: 37px;
        padding: ${props => (props.isSpeaker ? '9px 11px 11px 13px' : '11px')};
        margin-right: 8px;
      `}
  }

  @media (max-width: 420px) {
    ${props =>
      !props.withDynamic &&
      css`
        width: 43px;
        height: 43px;
        padding: 15px;
        margin-right: 20px;
      `}
  }
`;

export const Img = styled.img``;

export const Label = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;

  @media screen and (max-width: 720px) {
    ${props =>
      props.withDynamic &&
      css`
        font-size: 14px;
        line-height: 132%;
      `}
  }
`;

export const Bar = styled.div`
  height: 4px;
  width: 170px;
  background-color: rgb(47, 142, 217, 0.1);
`;

export const Span = styled(Subtitle)`
  margin-top: auto;

  @media screen and (max-width: 720px) {
    ${props =>
      props.withDynamic &&
      css`
        font-size: 14px;
        line-height: 132%;
      `}
  }
`;

export const Scale = styled.div`
  padding: 14px 0;
  display: ${props => (props.pause && props.withDynamic ? 'none' : 'block')};
`;

export const Progress = styled.div`
  height: 4px;
  background-color: #2f8ed9;
  width: 0;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    width: 18px;
    height: 8px;
    background-color: #2f8ed9;
    right: -18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
