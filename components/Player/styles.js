import styled from 'styled-components';
import { Subtitle } from 'elements';

export const Block = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Button = styled.button`
  margin-right: 20px;
  width: 57px;
  height: 57px;
  background-color: #fff;
  background-image: ${props => `url('/emodzi/${props.name}.png')`};
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 420px) {
    width: 43px;
    height: 43px;
  }
`;

export const Label = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
`;

export const Bar = styled.div`
  height: 4px;
  width: 170px;
  background-color: rgb(47, 142, 217, 0.1);
`;

export const Span = styled(Subtitle)`
  margin-top: auto;
`;

export const Scale = styled.div`
  padding: 14px 0;
  display: ${props => (props.pause ? 'none' : 'block')};
`;

export const Progress = styled.div`
  height: 4px;
  background-color: #2F8ED9;
  width: 0;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    width: 18px;
    height: 8px;
    background-color: #2F8ED9;
    right: -18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
