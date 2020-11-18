import Vk from 'public/icons/vk.svg';
import Twitter from 'public/icons/twitter.svg';
import Facebook from 'public/icons/facebook.svg';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const List = styled.ul`
  background-color: #f7f8f9;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  @media screen and (max-width: 768px) {
    box-sizing: border-box;
    margin: 0 auto;
    margin-top: 94px;
    margin-bottom: 94px;
    display: flex;
    position: relative;
    padding: 0 10%;
    top: 0;
    transform: translateY(0);
    max-width: 84%;
    justify-content: space-around;
  }
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

const SocialSticker = ({ data, className }) => {
  const [currentURL, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <List className={className}>
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
