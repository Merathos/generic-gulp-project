import styled from 'styled-components';
import { Social } from 'components';

const StyledFooter = styled.footer`
  padding: 220px 46px 46px;
  display: flex;
  align-items: flex-end;

  @media (max-width: 420px) {
    padding: 50px 64px;
    flex-direction: column-reverse;
    text-align: center;
    align-items: center;
    padding-top: 120px;
  }
`;

const Container = styled.div`
  width: 265px;
  margin-right: 150px;

  @media (max-width: 420px) {
    margin-right: 0;
  }
`;

const FooterText = styled.p`
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

const Button = styled.button`
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

const Link = styled.a`
  font-weight: 500;
  font-size: 14px;
  line-height: 144.2%;
`;


const Footer = ({
  data: {
    labour: { link, text },
    suscribe,
    social,
    copyright
  }
}) => (
  <StyledFooter>
    <Container>
      <FooterText>{copyright}</FooterText>
      <Link href={link}>{text}</Link>
    </Container>
    <Button>{suscribe}</Button>
    <Social links={social} />
  </StyledFooter>
);

export default Footer;
