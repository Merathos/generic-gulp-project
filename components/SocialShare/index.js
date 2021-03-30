import Vk from 'public/icons/vk.svg';
import Twitter from 'public/icons/twitter.svg';
import Facebook from 'public/icons/facebook.svg';
import { useState, useEffect } from 'react';
import mock from 'mock/social';
import * as S from './styles';

const SocialShare = ({ className }) => {
  const [currentURL, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <S.List className={className}>
      {mock.socialShare.map((el, i) => (
        <li key={i}>
          <S.Link href={el.link + currentURL} target="_blank" rel="noreferrer">
            {
              {
                twitter: <Twitter />,
                facebook: <Facebook />,
                vk: <Vk />,
              }[el.title]
            }
          </S.Link>
        </li>
      ))}
    </S.List>
  );
};

export default SocialShare;
