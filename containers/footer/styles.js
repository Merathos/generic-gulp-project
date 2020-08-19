import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding: 120px 46px 46px;
  display: flex;
  align-items: flex-end;
  background-color: ${props => (props.grey ? '#F7F8F9' : 'transparent')};
  justify-content: space-between;

  @media (max-width: 420px) {
    padding: 50px 0;
    flex-direction: column-reverse;
    text-align: center;
    align-items: center;
    padding-top: 120px;
  }
`;

export const Container = styled.div`
  width: 265px;
  margin-right: 150px;

  @media (max-width: 420px) {
    margin-right: 0;
  }
`;

export const FooterText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  opacity: 0.5;
  margin-bottom: 20px;

  @media (max-width: 420px) {
    margin-bottom: 12px;
    text-align: center;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: #FB5235;
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;

  @media (max-width: 420px) {
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