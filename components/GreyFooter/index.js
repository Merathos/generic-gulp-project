import ArrowRight from 'public/icons/arrow-right.svg';
import { BlogsCard } from 'components';
import Link from 'next/link';
import * as S from './styles';

const GreyFooter = ({ data, type, background }) => {
  return (
    <S.Section background={background} type={type}>
      {type === 'blog' ? (
        <S.ListBlog>
          {data.map((el, i) => (
            <S.Card key={i}>
              <BlogsCard data={el} background="#fff" />
            </S.Card>
          ))}
        </S.ListBlog>
      ) : (
        <S.ListContainer background={background} type={type}>
          <S.List>
            {data.map((el, i) => (
              <Link href={el.href ? el.href : ''} key={i} passHref>
                <S.Element>
                  <S.Title>{el.title}</S.Title>
                  <S.Text>{el.text}</S.Text>
                  <S.ArrowWrapper>
                    <ArrowRight />
                  </S.ArrowWrapper>
                </S.Element>
              </Link>
            ))}
          </S.List>
        </S.ListContainer>
      )}
    </S.Section>
  );
};

export default GreyFooter;
