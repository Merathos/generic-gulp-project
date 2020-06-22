import styled from 'styled-components';
import Link from 'next/link';

const Styled = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 158%;
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  color: #201f2a;
  text-decoration: none;
`;

const CustomLink = ({ href, content }) => (
  <Styled>
    <Link href={href}>{content}</Link>
  </Styled>
);

export default CustomLink;
