import styled, { css } from 'styled-components';

export const StyledFooter = styled.footer`
  padding: 186px 46px 40px;
  margin-top: auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background-color: ${(props) => (props.grey ? '#F7F8F9' : 'transparent')};

  ${(props) =>
    props.smallPadding &&
    css`
      @media screen and (max-width: 600px) {
        padding-top: 120px;
      }
    `};

  @media screen and (max-width: 1440px) {
    justify-content: flex-start;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    text-align: center;
    align-items: flex-start;
  }

  @media screen and (max-width: 768px) {
    padding: ${(props) =>
      props.isVisible
        ? `${props.grey ? '26px' : '0'} 60px 50px 60px`
        : '120px 60px 50px 60px'};
  }

  @media screen and (max-width: 420px) {
    padding: ${(props) =>
      props.isVisible
        ? `${props.grey ? '26px' : '0'} 60px 50px 60px`
        : '120px 30px 40px 30px'};
  }

  ${(props) =>
    props.smallIndent &&
    css`
      padding-top: 150px;

      @media screen and (max-width: 420px) {
        padding-top: 70px;
      }
    `};
`;

export const Container = styled.div`
  flex-shrink: 0;
  width: 265px;
  margin-right: 240px;

  @media screen and (max-width: 1200px) {
    margin-right: 120px;
  }

  @media screen and (max-width: 1024px) {
    margin-right: 0;
    margin-top: 22px;
    margin-bottom: 40px;
    width: 90%;
    text-align: left;
  }
`;

export const FooterText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  opacity: 0.5;
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 12px;
    font-size: 10px;
  }
`;

export const Link = styled.a`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 144.2%;

  @media screen and (max-width: 1024px) {
    font-size: 10px;
  }
`;

export const Span = styled.span`
  font-size: 12px;
  line-height: 18px;
  opacity: 0.6;
  margin-right: 10px;

  @media screen and (max-width: 1024px) {
    font-size: 10px;
    line-height: 120%;
  }
`;

export const ProducerLink = styled.a`
  display: inline-block;
  line-height: 100%;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  @media screen and (max-width: 1024px) {
    svg {
      width: 56px;
      height: 24px;
    }
  }
`;

export const Block = styled.div`
  display: flex;
  align-items: flex-end;
  min-width: 175px;
  margin-bottom: 10px;

  @media screen and (max-width: 1440px) {
    margin-left: auto;
  }

  @media screen and (max-width: 1024px) {
    order: -1;
    width: 100%;
    justify-content: space-between;
    margin-left: 0;
  }
`;
