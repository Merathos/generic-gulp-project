import Instagram from 'public/icons/instagram.svg';
import Vk from 'public/icons/vk.svg';
import Hh from 'public/icons/hh.svg';
import Youtube from 'public/icons/youtube.svg';
import Linkedin from 'public/icons/in.svg';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  margin: 0 0 0 auto;
`;

const Element = styled.li`
  margin-left: 14px;
`;

const SocialLink = styled.a`
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, #F7F8F9, #F7F8F9), #201F2A;
  border-radius: 50%;

  @media (max-width: 420px) {
    margin-bottom: 30px;
  }
`;

const Social = ({ links }) => (
  <List>
    <Element>
      <SocialLink href={links.hh}>
        <Hh />
      </SocialLink>
    </Element>
    <Element>
      <SocialLink href={links.yotube}>
        <Youtube />
      </SocialLink>
    </Element>
    <Element>
      <SocialLink href={links.linkedin}>
        <Linkedin />
      </SocialLink>
    </Element>
    <Element>
      <SocialLink href={links.vk}>
        <Vk />
      </SocialLink>
    </Element>
    <Element>
      <SocialLink href={links.instagram}>
        <Instagram />
      </SocialLink>
    </Element>
  </List>
);

export default Social;
