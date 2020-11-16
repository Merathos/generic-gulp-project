import Vk from 'public/icons/vk.svg';
import Twitter from 'public/icons/twitter.svg';
import Facebook from 'public/icons/facebook.svg';
import styled from 'styled-components';

const List = styled.ul`
  background-color: #f7f8f9;
`;

const Link = styled.a`
  width: 47px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialSticker = ({ data, className }) => (
  <List className={className}>
    {data.map((el, i) => (
      <li key={i}>
        <Link href={el.link}>
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

export default SocialSticker;
