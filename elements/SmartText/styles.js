import styled from 'styled-components';

export const Text = styled.p`
  margin-top: 27px;
  font-size: 18px;
  line-height: 27.72px;
  color: rgba(32, 31, 42, 0.5);

  @media screen and (max-width: 767px) {
    margin-top: 5px;
    font-size: 14px;
    line-height: 22.12px;
  }
`;

export const Button = styled.span`
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  font-size: 16px;
  color: #53b443;
  transition: color 0.2s ease-in;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 22px;
  }

  &:hover {
    color: #339722;
  }
`;

export const Icon = styled.svg`
  margin-left: 7px;
  margin-right: 7px;
  align-self: center;
  transform: rotate(${(props) => (props.showLess ? '' : '180deg')})
    translateY(${(props) => (props.showLess ? '' : '-3px')});
  transition: transform 0.2s ease-in;
`;
