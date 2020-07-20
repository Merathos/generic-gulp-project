import Link from 'next/link';
import { useRouter } from 'next/router';
import { Styled, StyledLink } from './styles';

const CustomLink = ({ href, content, className }) => {
  const { pathname } = useRouter();

  return (
    <Styled className={className}>
      <Link href={href}>
        <StyledLink activeLink={pathname === href}>{content}</StyledLink>
      </Link>
    </Styled>
  )
};

export default CustomLink;
