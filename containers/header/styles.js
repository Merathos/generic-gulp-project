import styled from 'styled-components';
import Logo from 'public/images/logo.svg';

export const StyledHeader = styled.header`
  padding: 34px 45px;
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

export const StyledLogo = styled(Logo)`
  width: 85px;

  @media (max-width: 420px) {
    width: 54px;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  width: 33px;
  height: 25px;
  margin-left: 102px;
`;

export const Nav = styled.nav`
  margin: 0 0 0 auto;

  @media screen and (max-width: 420px) {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
`;

export const Element = styled.li`
  margin-left: 40px;
`;
