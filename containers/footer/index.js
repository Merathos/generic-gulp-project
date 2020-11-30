import { Social } from 'components';
import LogoNimax from 'public/images/logo-nimax.svg';
import * as S from './styles';

const Footer = ({
  data: {
    labour: { link, text },
    social,
    copyright,
    producersText,
    producersLink,
  },
  grey,
  smallPadding,
  nimax,
  isVisible,
  isAbout,
}) => (
  <S.StyledFooter
    grey={grey}
    smallPadding={smallPadding}
    isVisible={isVisible}
    isAbout={isAbout}
  >
    <S.Container>
      <S.FooterText>{copyright}</S.FooterText>
      <S.Link href={link}>{text}</S.Link>
    </S.Container>
    <Social grey={grey} links={social} />
    {nimax && (
      <S.Block>
        <S.Span>{producersText}</S.Span>
        <S.ProducerLink href={producersLink}>
          <LogoNimax />
        </S.ProducerLink>
      </S.Block>
    )}
  </S.StyledFooter>
);

export default Footer;
