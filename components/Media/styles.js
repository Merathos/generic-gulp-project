import styled from 'styled-components';
import Subtitle from 'elements/Subtitle';

export const Text = styled(Subtitle)`
  margin-top: 20px;
  text-align: center;
  margin-bottom: 100px;

  @media screen and (max-width: 420px) {
    margin-top: 5px;
    margin-bottom: 50px;
  }
`;

export const Section = styled.section`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 147px;
    height: 147px;
    border-radius: 50%;
    left: -75px;
    top: -75px;
    background-color: #f7F8F9;
    z-index: -1;
    display: ${props => props.decoration ? "block" : "none"}
  }

  @media screen and (max-width: 420px) {
    &::before {
      width: 112px;
      height: 112px;
      left: -55px;
      top: -55px;
    }
  }
`;