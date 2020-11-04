import styled from 'styled-components';
import Logo from 'public/images/logo.svg';

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  z-index: 10;
  background-color: #f7f8f9;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  background-color: #f7f8f9;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 66%;
  padding: 34px 45px 50px;
  background-color: #f7f8f9;

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
    box-sizing: border-box;
  }

  @media screen and (max-width: 720px) {
    padding-top: 30px;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 40px;
  right: 42px;
  display: flex;
  z-index: 20;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 30px;
  border: none;
  background-color: transparent;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  @media screen and (max-width: 720px) {
    top: 22px;
    right: 22px;
  }
`;

export const StyledLogo = styled(Logo)`
  width: 85px;
  height: 25px;
  margin-bottom: 140px;
  margin-right: 50px;

  @media screen and (max-width: 1024px) {
    width: 56px;
    height: 16px;
    margin-bottom: 64px;
  }
`;

export const CopyrightMenuBlock = styled.div`
  margin-left: 74px;
  margin-top: auto;
  width: 265px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Copyright = styled.div`
  font-size: 14px;
  line-height: 120%;
  opacity: 0.5;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 720px) {
    font-size: 10px;
  }
`;

export const Ref = styled.a`
  margin-top: 22px;
  font-size: 14px;
  line-height: 20.19px;
  transition: color 0.3s ease;

  @media screen and (max-width: 720px) {
    margin-top: 12px;
    font-size: 10px;
    line-height: 14.42px;
  }
`;

export const Contacts = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 34%;
  padding-top: 200px;
  padding-bottom: 40px;
  background-color: #ffffff;

  &:before {
    content: '';
    position: absolute;
    bottom: 236px;
    left: 14px;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background-color: #fb5235;
    z-index: 3;

    @media screen and (max-width: 1200px) {
      bottom: 186px;
    }

    @media screen and (max-width: 1024px) {
      bottom: auto;
      left: auto;
      top: -100px;
      right: 70px;
      width: 53px;
      height: 53px;
    }

    @media screen and (max-width: 720px) {
      top: -90px;
      right: 10px;
    }
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 126px;
    left: -174px;
    width: 212px;
    height: 212px;
    transform: rotate(-28deg);
    background-color: #2f8ed9;
    z-index: 5;

    @media screen and (max-width: 1200px) {
      bottom: 86px;
    }

    @media screen and (max-width: 1024px) {
      bottom: auto;
      left: auto;
      top: -80px;
      right: 100px;
      width: 104px;
      height: 104px;
      transform: rotate(-50deg);
    }

    @media screen and (max-width: 720px) {
      right: 46px;
      transform: rotate(-38deg);
    }
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-top: auto;
    padding: 80px 30px 50px;
    box-sizing: border-box;
  }
`;

export const Socials = styled.div`
  margin-top: auto;
  margin-left: 90px;
  margin-right: 30px;

  @media screen and (max-width: 1200px) {
    align-self: center;
    margin-left: 40px;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 80px;
    margin-right: 0;
    margin-left: 0;
    align-self: flex-start;
  }

  @media screen and (max-width: 420px) {
    margin-top: 120px;
  }
`;

export const CopyrightContactsBlock = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
    margin-top: 30px;
  }

  @media screen and (max-width: 720px) {
    margin-top: 24px;
    max-width: 255px;
  }
`;

export const Producer = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    margin-top: 50px;

    svg {
      width: 56px;
      height: 24px;
    }
  }

  @media screen and (max-width: 420px) {
    align-items: flex-end;
    justify-content: space-between;
  }
`;

export const Span = styled.span`
  margin-right: 10px;
  font-size: 14px;
  line-height: 20.19px;
  opacity: 0.5;

  @media screen and (max-width: 900px) {
    font-size: 10px;
    line-height: 12px;
  }
`;
