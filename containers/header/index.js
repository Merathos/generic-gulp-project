import styled, { css } from 'styled-components';
import { OpenedMenu } from 'containers';
import CustomLink from 'elements/CustomLink';
import Logo from 'public/images/logo.svg';
import Menu from 'public/icons/menu.svg';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const StyledHeader = styled.header`
  padding: 34px 48px 34px 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: ${props =>
    props.plain ? 'none' : `url('/images/yellow-rectangle.svg')`};
  background-repeat: no-repeat;
  background-position: 40% top;
  background-color: ${props => (props.greyHeader ? '#f7f8f9' : '#ffffff')};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  box-sizing: border-box;

  .guidingLogo {
    max-height: 25px;
  }

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
    padding: 25px 30px 30px;
    align-items: center;
    background-size: 200px;
    background-position: 50% top;
  }
`;

const StyledLogo = styled(Logo)`
  width: 86px;
  height: 25px;
  transition: opacity 0.3s ease;

  ${props =>
    props.guiding &&
    css`
      &:hover {
        opacity: 0.8;
      }

      &:active {
        opacity: 0.6;
      }
    `};

  @media (max-width: 420px) {
    width: 54px;
  }
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  width: 33px;
  height: 25px;
  margin-left: 100px;

  svg > * {
    transition: fill 0.3s ease;
  }

  &:hover {
    svg > * {
      fill: #53b443;
    }
  }

  &:active {
    svg > * {
      fill: #53b443;
    }
  }
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

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Element = styled.li`
  margin-left: 42px;
`;

const Header = ({ data: links, plain, anchor, hideHav, greyHeader }) => {
  const [isMenuOpened, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <StyledHeader plain={plain} anchor={anchor} greyHeader={greyHeader}>
      {router.pathname === '/' ? (
        <StyledLogo />
      ) : (
        <Link href="/" passHref>
          <a aria-label="To the main page" className="guidingLogo">
            <StyledLogo guiding="guiding" />
          </a>
        </Link>
      )}
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
        type="button"
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
