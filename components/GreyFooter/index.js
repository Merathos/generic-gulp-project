import ArrowRight from 'public/icons/arrow-right.svg';
import { StoryCard } from 'components';
import Link from 'next/link';
import Swiper from 'react-id-swiper';
import * as S from './styles';

const GreyFooter = ({ data, type, background }) => {
  const params = {
    slidesPerView: 'auto',
    loop: false,
  };
  return (
    <S.Section background={background} type={type}>
      {type === 'blog' ? (
        <S.ListBlog>
          <Swiper {...params}>
            {data.map(item => {
              return (
                <S.Card key={item.id}>
                  <StoryCard data={item} background="#fff" staticWidth />
                </S.Card>
              );
            })}
          </Swiper>
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
