import Swiper from 'react-id-swiper';
import { useRef } from 'react';
import ArrowPrev from 'public/icons/arrow-prev.svg';
import ArrowNext from 'public/icons/arrow-next.svg';
import * as S from './styles';

const PortraitSlider = ({ quotes }) => {
  const ref = useRef(null);

  const params = {
    loop: true,
    effect: 'fade',
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
      <Swiper ref={ref} {...params}>
        {quotes.map(item => (
          <S.Element key={item.id}>
            {item.image && (
              <S.Img
                src={item.image.path.normal}
                srcSet={`${item.image.path.retina} 2x`}
                alt={item.name}
                width="792"
                height="836"
                loading="lazy"
              />
            )}
            {item.content && (
              <S.QuoteBlock bgColor={item.color}>
                <S.Quote>{item.content}</S.Quote>
                <S.Author>{item.name}</S.Author>
              </S.QuoteBlock>
            )}
          </S.Element>
        ))}
      </Swiper>
    </S.Section>
  );
};

export default PortraitSlider;
