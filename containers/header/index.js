import styled from 'styled-components';
import Logo from 'public/images/logo.svg';
import Menu from 'public/icons/menu.svg';
import CustomLink from 'elements/CustomLink';

const StyledHeader = styled.header`
  padding: 34px 48px 34px 46px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background-image: url('/images/yellow-rectangle.svg');
  background-repeat: no-repeat;
  background-position: 40% top;
  position: absolute;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 420px) {
    padding: 30px;
    align-items: center;
    background-size: 200px;
    background-position: 50% top;
  }
`;

const StyledLogo = styled(Logo)`
  width: 85px;

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

const Header = ({ data: links }) => (
  <StyledHeader>
    <StyledLogo />
    <Nav>
      <List>
        {links.map((el, i) => (
          <Element key={i}>
            <CustomLink href={`/${el.href}`} content={el.title} />
          </Element>
        ))}
      </List>
    </Nav>
    <Button>
      <Menu />
    </Button>
  </StyledHeader>
);

export default Header;
