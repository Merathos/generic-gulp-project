import { Header, Footer, OpenedMenu } from 'containers';
import { SocialSticker, CookieMessage, GreyFooter } from 'components';
import Router from 'next/router';
import { useState, useEffect } from 'react';
import mock from 'mock/layout';
import mockCookie from 'mock/cookie';
import * as S from './styles';

const Layout = ({
  children,
  backButton,
  greyFooter,
  subscription,
  isVisible = true,
  showFooter = true,
  plainHeader = false,
  smallPadding = false,
  nimax = true,
  anchor = false,
  hideNav = false,
  smallIndent = false,
  greyHeader = true,
  smallButton = false,
  mobileDecor = false,
  isFixed = false,
  relatedHistoryData = [],
}) => {
  const [isMenuOpened, setMenuOpen] = useState(false);
  const [cookieAccepted, setCookieAccepted] = useState(true);

  const relatedHistory = relatedHistoryData?.filter(
    (i) => i.type === 'history'
  );

  useEffect(() => {
    if (!localStorage.getItem('cookie_accepted')) {
      setCookieAccepted(false);
    }
  }, []);

  const handleCloseMenu = () => {
    setMenuOpen(true);
  };

  return (
    <S.Wrapper>
      <Header
        data={mock.header}
        plain={plainHeader}
        anchor={anchor}
        hideNav={hideNav}
        greyHeader={greyHeader}
        mobileDecor={mobileDecor}
        onMenuClose={handleCloseMenu}
      />
      {children}
      {isVisible && (
        <SocialSticker data={mock.socialSticker} isFixed={isFixed} />
      )}
      {relatedHistory?.length > 0 && (
        <S.GreyContainer>
          <GreyFooter data={relatedHistory} type="blog" />
        </S.GreyContainer>
      )}
      {showFooter && (
        <Footer
          data={mock.footer}
          grey={greyFooter}
          smallPadding={smallPadding}
          subscription={subscription}
          nimax={nimax}
          isVisible={isVisible}
          smallIndent={smallIndent}
        />
      )}
      {isMenuOpened && (
        <OpenedMenu
          isOpen={isMenuOpened}
          onMenuClose={() => {
            setMenuOpen(false);
          }}
        />
      )}
      {backButton && (
        <a>
          <S.StyledArrowLeft
            onClick={() => Router.back()}
            smallButton={smallButton}
          >
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.27524 12.6749L0.232105 7.48971C-0.0773673 7.17152 -0.0773672 6.65563 0.232105 6.33744L5.27524 1.15222C5.58472 0.834026 6.08647 0.834026 6.39594 1.15222C6.70541 1.47041 6.70541 1.9863 6.39594 2.30449L2.7056 6.09879L14 6.0988L14 7.72835L2.7056 7.72835L6.39594 11.5227C6.70541 11.8408 6.70541 12.3567 6.39594 12.6749C6.08647 12.9931 5.58471 12.9931 5.27524 12.6749Z"
                fill="currentColor"
              />
            </svg>
          </S.StyledArrowLeft>
        </a>
      )}
      {!cookieAccepted && (
        <CookieMessage
          data={mockCookie.cookie}
          setCookieAccepted={setCookieAccepted}
        />
      )}
    </S.Wrapper>
  );
};

export default Layout;
