import styled, { css } from 'styled-components';
import { OpenedMenu } from 'containers';
import CustomLink from 'elements/CustomLink';
import Logo from 'public/images/logo.svg';
import Menu from 'public/icons/menu.svg';
import { useState } from 'react';

const StyledHeader = styled.header`
  padding: 34px 45px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background-image: ${props =>
    props.plain ? 'none' : `url('/images/yellow-rectangle.svg')`};
  background-repeat: no-repeat;
  background-position: 40% top;
  position: absolute;
  width: 100%;
  box-sizing: border-box;

  ${props =>
    props.anchor &&
    css`
      @media (max-width: 768px) {
        position: sticky;
        top: 0;
        background-color: #ffffff;
        z-index: 5;
      }
    `};

  @media (max-width: 420px) {
    padding: 30px;
    align-items: center;
    background-size: 200px;
    background-position: 50% top;
  }
`;

const StyledLogo = styled(Logo)`
  width: 85px;
  height: 26px;

  @media (max-width: 420px) {
    width: 54px;
  }
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  width: 33px;
  height: 25px;
  margin-left: 102px;
`;

const Nav = styled.nav`
  margin: 0 0 0 auto;

  @media screen and (max-width: 720px) {
    ${props =>
      props.plain && {
        display: 'none',
      }}
  }

  @media screen and (max-width: 600px) {
    ${props =>
      props.hideNav && {
        display: 'none',
      }}
  }

  @media screen and (max-width: 420px) {
    display: none;
  }
`;

const List = styled.ul`
  display: flex;
`;

const Element = styled.li`
  margin-left: 40px;
`;

const Header = ({ data: links, plain, anchor, hideHav }) => {
  const [isMenuOpened, setMenuOpen] = useState(false);

  return (
    <StyledHeader plain={plain} anchor={anchor}>
      <StyledLogo />
      <Nav plain={plain} hideNav={hideHav}>
        <List>
          {links.map((el, i) => (
            <Element key={i}>
              <CustomLink href={`/${el.href}`}>{el.title}</CustomLink>
            </Element>
          ))}
        </List>
      </Nav>
      <Button
        aria-label="Menu"
        onClick={() => {
          setMenuOpen(true);
        }}
      >
        <Menu />
      </Button>
      {isMenuOpened && (
        <OpenedMenu
          onMenuClose={() => {
            setMenuOpen(false);
          }}
        />
      )}
    </StyledHeader>
  );
};

export default Header;
