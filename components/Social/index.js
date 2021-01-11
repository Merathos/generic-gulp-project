import Vk from 'public/icons/vk.svg';
import In from 'public/icons/in.svg';
import Yb from 'public/icons/youtube.svg';
import Insta from 'public/icons/instagram.svg';
import Hh from 'public/icons/hh.svg';
import * as S from './styles';

const Social = ({ links, grey, noMargin = false }) => (
  <S.List noMargin={noMargin}>
    {links.map((el, i) => (
      <S.Element key={i}>
        <S.SocialLink
          href={el.link}
          grey={grey}
          color={el.title === 'vk' || el.title === 'linkedin' ? 'blue' : 'red'}
          aria-label={el.title}
          target="_blank"
          rel="noreferrer"
        >
          {
            {
              youtube: <Yb />,
              hh: <Hh />,
              vk: <Vk />,
              instagram: <Insta />,
              linkedin: <In />,
            }[el.title]
          }
        </S.SocialLink>
      </S.Element>
    ))}
  </S.List>
);

export default Social;
