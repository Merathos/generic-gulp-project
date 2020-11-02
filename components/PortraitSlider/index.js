import Swiper from 'react-id-swiper';
import { useRef, useState } from 'react';
import ArrowPrev from 'public/icons/arrow-prev.svg';
import ArrowNext from 'public/icons/arrow-next.svg';
import * as S from './styles';

const PortraitSlider = ({ pictures }) => {
  const ref = useRef(null);
  const [activeSlide, setActiveSlide] = useState(1);

  const params = {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    renderPrevButton: () => {
      return (
        <>
          <S.PrevButtonMain
            className="swiper-button-prev"
            type="button"
            aria-label="Previous slide"
          >
            <ArrowPrev />
          </S.PrevButtonMain>
          <S.PrevButton
            className="swiper-button-prev"
            type="button"
            aria-label="Previous slide"
          >
            <ArrowPrev />
          </S.PrevButton>
        </>
      );
    },
    renderNextButton: () => (
      <>
        <S.NextButtonMain
          className="swiper-button-next"
          type="button"
          aria-label="Next slide"
        >
          <ArrowNext />
        </S.NextButtonMain>
        <S.NextButton
          className="swiper-button-next"
          type="button"
          aria-label="Next slide"
        >
          <ArrowNext />
        </S.NextButton>
      </>
    ),
  };

  return (
    <S.Section
      className={activeSlide === 1 ? 'first-active-slide' : 'inactive-slide'}
    >
      <Swiper
        ref={ref}
        {...params}
        on={{
          slideChange: () => {
            let activeIndex = ref.current.swiper.activeIndex;
            if (activeIndex === 0) {
              activeIndex = pictures.length;
            }
            if (activeIndex > pictures.length) {
              activeIndex = 1;
            }
            setActiveSlide(activeIndex);
          },
        }}
      >
        {pictures.map((el, i) => (
          <S.Element key={i} isMain={el.isMain}>
            <S.Img
              src={el.src}
              alt={el.alt}
              width={el.size.width}
              height={el.size.height}
            />
            {el.quote && (
              <S.QuoteBlock bgColor={el.bgColor} textColor={el.textColor}>
                <S.Quote>{el.quote}</S.Quote>
                <S.Author>{el.name}</S.Author>
              </S.QuoteBlock>
            )}
          </S.Element>
        ))}
      </Swiper>
    </S.Section>
  );
};

export default PortraitSlider;
