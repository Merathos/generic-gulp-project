// import Logo from 'elements';
import Link from 'next/link';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const List = styled.ul`
  display: flex;

  @media (max-width: 420px) {
    display: none;
  }
`;

const Header = ({ links }) => (
  <StyledHeader>
    <img src="assets/logo.png" alt="dins logotype" />
    <List>
      {links.map(el => (
        <li>
          <Link href={`/${el.href}`}>{el.title}</Link>
        </li>
      ))}
    </List>
    <button type="button">Menu</button>
  </StyledHeader>
);

export default Header;
