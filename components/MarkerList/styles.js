import styled from 'styled-components';

export const Img = styled.img`
  margin-bottom: 40px;

  @media screen and (max-width: 420px) {
    margin-bottom: 20px;
  }
`;

export const ElementEllipse = styled.li`
  padding-left: ${props => (props.inline ? '20px' : '70px')};
  position: relative;
  margin-bottom: ${props => (props.inline ? '16px' : '30px')};
  margin-right: ${props => (props.inline ? '40px' : '0')};
  z-index: ${props => (props.inline ? '2' : '0')};

  &::before {
    content: '';
    position: absolute;
    border: 2px solid #2f8ed9;
    border-radius: 50%;
    width: ${props => (props.inline ? '6px' : '8px')};
    height: ${props => (props.inline ? '6px' : '8px')};
    left: ${props => (props.inline ? '0' : '30px')};
    top: ${props => (props.inline ? '6px' : '10px')};
  }

  @media screen and (max-width: 420px) {
    padding-left: 25px;
    margin-bottom: 20px;
    margin-right: ${props => (props.inline ? '25px' : '0')};

    &::before {
      left: 0;
    }
  }
`;

export const ElementNumber = styled.li`
  padding-left: 30px;
  position: relative;
  display: flex;
  margin-bottom: 30px;

  @media screen and (max-width: 420px) {
    padding-left: 0;
    margin-bottom: 20px;
  }
`;

export const Number = styled.span`
  color: #2f8ed9;
  margin-right: 20px;
  font-size: 18px;
  line-height: 32px;

  @media screen and (max-width: 420px) {
    margin-right: 10px;
  }
`;

export const Text = styled.p`
  font-size: ${props => (props.inline ? '18px' : '20px')};
  line-height: ${props => (props.inline ? '120%' : '158%')};

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 158%;
  }
`;
