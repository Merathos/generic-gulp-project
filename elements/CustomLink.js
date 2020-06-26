import styled from 'styled-components';
import Link from 'next/link';

const Styled = styled.div`
  font-size: 18px;
  line-height: 120%;
`;

const CustomLink = ({ href, content, className }) => (
  <Styled className={className}>
    <Link href={href}>{content}</Link>
  </Styled>
);

export default CustomLink;
