import { Social } from 'components';
import LogoNimax from 'public/images/logo-nimax.svg';
import * as S from './styles';

const Footer = ({
  data: {
    labour: { link, text },
    social,
    copyright,
    nimaxText,
  },
  grey,
  smallPadding,
  nimax,
  isVisible,
  smallIndent,
}) => (
  <S.StyledFooter
    grey={grey}
    smallPadding={smallPadding}
    isVisible={isVisible}
    smallIndent={smallIndent}
  >
    <S.Container>
      <S.FooterText>{copyright}</S.FooterText>
      <S.Link href={link}>{text}</S.Link>
    </S.Container>
    <Social grey={grey} links={social} />
    {nimax && (
      <S.Block>
        <S.Span>{nimaxText}</S.Span>
        <LogoNimax />
      </S.Block>
    )}
  </S.StyledFooter>
);

export default Footer;
