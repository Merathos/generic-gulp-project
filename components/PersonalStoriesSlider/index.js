import Swiper from 'react-id-swiper';
import { Player } from 'components';
import { useRef, useState } from 'react';
import ArrowPrev from 'public/icons/arrow-prev.svg';
import ArrowNext from 'public/icons/arrow-next.svg';
import Link from 'next/link';
import * as S from './styles';

const PersonalStoriesSlider = ({ blogs }) => {
  const [activeSlide, setActiveSlide] = useState(1);
  const ref = useRef(null);

  const params = {
    loop: true,
    autoHeight: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    renderPrevButton: () => {
      return (
        <S.PrevButton
          className="swiper-button-prev"
          type="button"
          aria-label="Previous slide"
        >
          <ArrowPrev />
        </S.PrevButton>
      );
    },
    renderNextButton: () => (
      <S.NextButton
        className="swiper-button-next"
        type="button"
        aria-label="Next slide"
      >
        <ArrowNext />
      </S.NextButton>
    ),
  };

  return (
    <S.Section>
      <Swiper
        ref={ref}
        {...params}
        on={{
          slideChange() {
            let { activeIndex } = ref.current.swiper;

            if (activeIndex === 0) {
              activeIndex = blogs.length;
            }
            if (activeIndex > blogs.length) {
              activeIndex = 1;
            }
            setActiveSlide(activeIndex);

            // if (ref.current.swiper.isEnd) {
            //   ref.current.swiper.loopDestroy();
            //   ref.current.swiper.loopCreate();
            // }
            // if (ref.current.swiper.isBeginning) {
            //   ref.current.swiper.loopDestroy();
            //   ref.current.swiper.loopCreate();
            // }
          },
        }}
      >
        {blogs.map((story, index) => (
          <S.Element key={story.id}>
            <S.TextWrapper>
              <S.Title>{story.title}</S.Title>
              <S.Text>{story.description}</S.Text>
              {story.audio && (
                <Player
                  isPaused={activeSlide !== index + 1}
                  withDynamic
                  src={story.audio}
                />
              )}
              <Link href={`/blog/${story.slug}`} passHref>
                <S.Link>Читать полностью</S.Link>
              </Link>
            </S.TextWrapper>
            {story.detail && (
              <S.ImageWrapper>
                <S.Img
                  src={story.detail.path?.normal}
                  alt={story.title}
                  loading="lazy"
                />
              </S.ImageWrapper>
            )}
          </S.Element>
        ))}
      </Swiper>
    </S.Section>
  );
};

export default PersonalStoriesSlider;
