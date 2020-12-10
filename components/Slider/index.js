import Swiper from 'react-id-swiper';
import { useRef } from 'react';
import {
  Section,
  Element,
  Img,
  Text,
  Title,
  NextButton,
  PrevButton,
} from './styles';
import ArrowPrev from '../../public/icons/arrow-prev.svg';
import ArrowNext from '../../public/icons/arrow-next.svg';

const Slider = ({
  subtitle,
  pictures,
  hasControls,
  isSmall,
  fromEditor,
  fromArticle,
  className,
}) => {
  const ref = useRef(null);

  const params = {
    slidesPerView: 'auto',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    renderPrevButton: () => {
      return (
        <PrevButton
          className="swiper-button-prev"
          hasControls={hasControls}
          fromArticle={fromArticle}
          isSmall={isSmall}
          type="button"
          aria-label="Previous slide"
        >
          <ArrowPrev />
        </PrevButton>
      );
    },
    renderNextButton: () => (
      <NextButton
        className="swiper-button-next"
        hasControls={hasControls}
        fromArticle={fromArticle}
        isSmall={isSmall}
        type="button"
        aria-label="Next slide"
      >
        <ArrowNext />
      </NextButton>
    ),
  };

  return (
    <Section
      hasControls={hasControls}
      className={className}
      fromArticle={fromArticle}
    >
      <Swiper ref={ref} {...params}>
        {pictures.map((el, i) => (
          <Element key={i} hasControls={hasControls}>
            <Img
              src={
                fromEditor
                  ? `https://api.develop.dins.d.nimax.ru/${el.imageUrl}`
                  : el.src
              }
              alt={el.title || el.alt}
              hasControls={hasControls}
              isSmall={isSmall}
              width={el.size?.width}
              height={el.size?.height}
            />
            {el.title && (
              <Title isSmall={isSmall} fromArticle={fromArticle}>
                {el.title}
              </Title>
            )}
          </Element>
        ))}
      </Swiper>
      {subtitle && <Text>{subtitle}</Text>}
    </Section>
  );
};

export default Slider;
