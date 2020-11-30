import styled, { css } from 'styled-components';

export const StyledFooter = styled.footer`
  padding: 220px 46px 46px;
  padding-top: 190px;
  display: flex;
  align-items: flex-end;
  background-color: ${props => (props.grey ? '#F7F8F9' : 'transparent')};
  justify-content: space-between;

  ${props =>
    props.smallPadding &&
    css`
      @media screen and (max-width: 600px) {
        padding-top: 120px;
      }
    `};

  @media screen and (max-width: 768px) {
    padding: ${props => (props.isVisible ? '26px 0 50px 0' : '120px 0 50px 0')};
    flex-direction: column-reverse;
    text-align: center;
    align-items: center;
  }

  ${props =>
    props.smallIndent &&
    css`
      padding-top: 150px;

      @media screen and (max-width: 420px) {
        padding-top: 70px;
      }
    `};
`;

export const Container = styled.div`
  width: 265px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-top: 20px;
  }
`;

export const FooterText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  opacity: 0.5;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 12px;
    text-align: center;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: #fb5235;
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Link = styled.a`
  font-weight: 500;
  font-size: 14px;
  line-height: 144.2%;
`;

export const Span = styled.span`
  font-size: 12px;
  line-height: 18px;
  opacity: 0.6;
  margin-right: 6px;
`;

export const Block = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
