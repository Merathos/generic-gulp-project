import { Header, Footer } from 'containers';
import styled from 'styled-components';
import ArrowLeft from 'public/icons/arrow-left.svg';
import { SocialSticker } from 'components';

import mock from 'mock/index';

const Wrapper = styled.div`
  position: relative;
`;

const StyledArrowLeft = styled(ArrowLeft)`
  position: absolute;
  left: 45px;

  @media screen and (max-width: 420px) {
    display: none;
  }
`;


const StyledSocialSticker = styled(SocialSticker)`
  position: absolute;
  right: 0;
  top: 440px;

  @media screen and (max-width: 420px) {
    display: none;
  }
`;

const Layout = ({ children, backButton }) => {
  return (
    <Wrapper>
      <Header data={mock.header} />
      {backButton && <StyledArrowLeft />}
      <StyledSocialSticker data={mock.socialSticker} />
      {children}
      <Footer data={mock.footer} />
    </Wrapper>
  );
};

export default Layout;
