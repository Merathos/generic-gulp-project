import Vk from 'public/icons/vk.svg';
import Twitter from 'public/icons/twitter.svg';
import Facebook from 'public/icons/facebook.svg';
import styled, { css } from 'styled-components';
import { useState, useEffect } from 'react';

const List = styled.ul`
  background-color: #f7f8f9;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  @media screen and (max-width: 768px) {
    box-sizing: border-box;
    margin: 94px auto;
    display: flex;
    position: relative;
    padding: 0 10%;
    top: 0;
    transform: translateY(0);
    max-width: 84%;
    justify-content: space-around;
  }

  ${props =>
    props.isFixed &&
    css`
      top: 682px;

      @media screen and (max-width: 1280px) {
        display: none;
      }
    `};
`;

const Link = styled.a`
  width: 47px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  @media screen and (max-width: 768px) {
    width: 80px;
    height: 47px;
  }

  &:hover {
    @media screen and (min-width: 769px) {
      border-color: #53b443;
      background-color: #53b443;
      color: #ffffff;
    }
  }

  &:active {
    border-color: #339722;
    background-color: #339722;
  }
`;

const SocialSticker = ({ data, className, isFixed }) => {
  const [currentURL, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <List className={className} isFixed={isFixed}>
      {data.map((el, i) => (
        <li key={i}>
          <Link href={el.link + currentURL} target="_blank" rel="noreferrer">
            {
              {
                twitter: <Twitter />,
                facebook: <Facebook />,
                vk: <Vk />,
              }[el.title]
            }
          </Link>
        </li>
      ))}
    </List>
  );
};

export default SocialSticker;
