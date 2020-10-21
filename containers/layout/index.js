import { Header, Footer } from 'containers';
import styled from 'styled-components';
import ArrowLeft from 'public/icons/arrow-left.svg';
import { SocialSticker } from 'components';
import Router from 'next/router';

import mock from 'mock/index';

const Wrapper = styled.div`
  position: relative;
`;

const StyledArrowLeft = styled(ArrowLeft)`
  position: absolute;
  left: 45px;
  top: 140px;

  @media screen and (max-width: 420px) {
    display: none;
  }
`;

const StyledSocialSticker = styled(SocialSticker)`
  position: fixed;
  right: 0;
  top: 600px;

  @media screen and (max-width: 420px) {
    display: none;
  }
`;

const Layout = ({
  children,
  backButton,
  greyFooter,
  subscription,
  isVisible = true,
  plainHeader = false,
  nimax = true
}) => {
  return (
    <Wrapper>
      <Header data={mock.header} plain={plainHeader} />
      {children}
      <Footer
        data={mock.footer}
        grey={greyFooter}
        subscription={subscription}
        nimax={nimax}
      />
      {isVisible && <StyledSocialSticker data={mock.socialSticker} />}
      {backButton && (
        <a>
          <StyledArrowLeft onClick={() => Router.back()} />
        </a>
      )}
    </Wrapper>
  );
};

export default Layout;
