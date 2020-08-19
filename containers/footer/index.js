import { Social } from 'components';
import LogoNimax from 'public/images/logo-nimax.svg';
import * as S from './styles';

const Footer = ({
  data: {
    labour: { link, text },
    suscribe,
    social,
    copyright,
    nimaxText
  },
  grey,
  suscribtion,
  nimax
}) => (
  <S.StyledFooter grey={grey}>
    <S.Container>
      <S.FooterText>{copyright}</S.FooterText>
      <S.Link href={link}>{text}</S.Link>
    </S.Container>
    {suscribtion && <Button>{suscribe}</Button>}
    <Social grey={grey} links={social} />
    {nimax && (
      <div>
        <S.Span>{nimaxText}</S.Span>
        <LogoNimax />
      </div>
      )}
  </S.StyledFooter>
);

export default Footer;
