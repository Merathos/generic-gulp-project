import styled, { css } from 'styled-components';
import Button from '../../elements/Button';

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: ${props => (props.showEvent ? 'column' : 'row')};
  justify-content: ${props => (props.showEvent ? 'stretch' : 'space-between')};
  width: ${props => (props.showEvent ? '394px' : '614px')};
  height: ${props => (props.showEvent ? '301px' : '391px')};
  margin-top: 20px;
  background-color: #f7f8f9;
  padding-top: ${props => (props.showEvent ? '60px' : '40px')};
  padding-left: ${props => (props.showEvent ? '60px' : '40px')};
  padding-bottom: ${props => (props.showEvent ? '70px' : '0')};
  padding-right: ${props => (props.showEvent ? '240px' : '40px')};

  ${props =>
    props.showEvent &&
    css`
      ::before {
        content: '';
        position: absolute;
        bottom: 50px;
        right: 85px;
        width: 115px;
        height: 115px;
        background-color: #2f8ed9;
        transform: rotate(37deg);
      }

      ::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 310px;
        height: 310px;
        clip-path: circle(50% at 100% 100%);
        background-color: #53b443;
      }
    `}

  ${props =>
    !props.showEvent &&
    props.blogLinkType === 'link2' &&
    props.blogLinkType === 'link2' &&
    css`
      background-image: url(${props => props.bg});
      background-repeat: no-repeat;
      background-position: 80% top;
    `}
  
  ${props =>
    !props.showEvent &&
    props.blogLinkType === 'link1' &&
    css`
      background-image: url(${props => props.bg});
      background-repeat: no-repeat;
      background-position: right bottom;
    `};
  
    @media screen and (max-width: 1360px) {
      width:  ${props => (props.showEvent ? '50%' : '100%')};
    }
    
    @media screen and (max-width: 720px) {
      width: 100%;
      height: 100%;
      padding-left: ${props => (props.showEvent ? '0' : '20px')};
      padding-right: 0;
      padding-bottom: ${props => (props.showEvent ? '60px' : '0')};
      padding-top: ${props => (props.showEvent ? '60px' : '20px')};
    }
    
    @media screen and (max-width: 420px) {
      ${props =>
        props.showEvent &&
        css`
          ::before {
            bottom: 55px;
            right: 20px;
            width: 73px;
            height: 73px;
          }

          ::after {
            width: 160px;
            height: 160px;
            clip-path: circle(50% at 100% 100%);
          }
        `}
    }
`;

export const Title = styled.b`
  margin-bottom: 14px;
  font-size: 50px;
  line-height: 60px;
  font-weight: 800;
  color: #fb5235;
  text-transform: uppercase;

  @media screen and (max-width: 720px) {
    font-size: 34px;
    line-height: 130%;
    margin-left: 30px;
  }

  @media screen and (max-width: 420px) {
    font-size: 28px;
    margin-bottom: 10px;
  }
`;

export const Date = styled.p`
  margin-bottom: 20px;

  @media screen and (max-width: 720px) {
    margin-left: 30px;
    margin-bottom: 40px;
  }
`;

export const EventButton = styled(Button)`
  align-self: flex-start;
  margin-top: auto;
  z-index: 1;

  @media screen and (max-width: 720px) {
    margin-left: 30px;
  }
`;

export const Link = styled.a`
  width: 50%;
  margin-bottom: 40px;
  align-self: flex-end;
  font-size: 32px;
  line-height: 140%;
  font-weight: 700;

  @media screen and (max-width: 420px) {
    font-size: 28px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  align-self: flex-end;
  max-width: 50%;

  @media screen and (max-width: 420px) {
    height: 286px;
  }
`;

export const Image = styled.img`
  flex: none;

  ${props =>
    props.blogLinkType === 'link2' &&
    css`
      margin-bottom: 40px;
    `}

  ${props =>
    props.blogLinkType === 'link1' &&
    css`
      margin-bottom: -9px;
    `};

  @media screen and (max-width: 420px) {
    height: 100%;
    width: auto;
  }
`;
