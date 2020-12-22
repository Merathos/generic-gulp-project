import * as S from './styles';
import { MenuList, ContactsList, Social } from '../../components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LogoNimax from '../../public/images/logo-nimax.svg';
import MenuClose from '../../public/icons/cross.svg';
import mock from 'mock/index';
import { useLayoutEffect } from 'react';

const OpenedMenu = ({ onMenuClose }) => {
  const router = useRouter();

  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    const handleEscPress = evt => {
      if (evt.keyCode === 27) {
        onMenuClose();
      }
    };

    window.addEventListener('keydown', handleEscPress);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleEscPress);
    };
  }, [onMenuClose]);

  const handleLogoClick = () => {
    if (router.pathname === '/') {
      onMenuClose();
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Button aria-label="Menu" onClick={onMenuClose} type="button">
          <MenuClose />
        </S.Button>
        <S.Menu>
          <Link href="/" passHref>
            <a aria-label="To the main page" onClick={handleLogoClick}>
              <S.StyledLogo guiding="guiding" />
            </a>
          </Link>
          <MenuList data={mock.headerMenu.menuList} onMenuClose={onMenuClose} />
          <S.CopyrightMenuBlock>
            <S.Copyright>{mock.footer.copyright}</S.Copyright>
            <Link href={mock.footer.labour.link} passHref>
              <S.Ref>{mock.footer.labour.text}</S.Ref>
            </Link>
          </S.CopyrightMenuBlock>
        </S.Menu>
        <S.Contacts>
          <ContactsList data={mock.headerMenu} />
          <S.Socials>
            <Social links={mock.footer.social} noMargin />
          </S.Socials>
          <S.CopyrightContactsBlock>
            <S.Copyright>{mock.footer.copyright}</S.Copyright>
            <Link href={mock.footer.labour.link} passHref>
              <S.Ref>{mock.footer.labour.text}</S.Ref>
            </Link>
          </S.CopyrightContactsBlock>
          <S.Producer>
            <S.Span>{mock.footer.producersText}</S.Span>
            <S.ProducerLink
              href={mock.footer.producersLink}
              aria-label="Digital-агентство Nimax"
            >
              <LogoNimax />
            </S.ProducerLink>
          </S.Producer>
        </S.Contacts>
      </S.Container>
    </S.Wrapper>
  );
};

export default OpenedMenu;
