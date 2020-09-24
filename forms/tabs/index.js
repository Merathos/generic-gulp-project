import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './styles';

const Tabs = ({ tabs }) => {
  const { query } = useRouter();
  return (
    <S.Wrapper>
      <S.List>
        {tabs.map((el, i) => (
          <S.Item key={i}>
            <Link href={`/blog/${encodeURIComponent(el.slug)}`}>
              <S.Label activeLink={query.slug === el.slug}>{el.title}</S.Label>
            </Link>
          </S.Item>
        ))}
      </S.List>
    </S.Wrapper>
  );
}

export default Tabs;
