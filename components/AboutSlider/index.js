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

const AboutSlider = ({
  subtitle,
  pictures,
  fromEditor,
  className,
  controlsTop,
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
          type="button"
          aria-label="Previous slide"
          controlsTop={controlsTop}
        >
          <ArrowPrev />
        </PrevButton>
      );
    },
    renderNextButton: () => (
      <NextButton
        className="swiper-button-next"
        type="button"
        aria-label="Next slide"
        controlsTop={controlsTop}
      >
        <ArrowNext />
      </NextButton>
    ),
  };

  return (
    <Section className={className}>
      <Swiper ref={ref} {...params}>
        {pictures.map((el, i) => (
          <Element key={i}>
            <Img
              src={
                fromEditor
                  ? `https://api.develop.dins.d.nimax.ru/${el.imageUrl}`
                  : el.src
              }
              alt={el.title || el.alt}
              width={el.size?.width}
              height={el.size?.height}
            />
            {el.title && <Title>{el.title}</Title>}
          </Element>
        ))}
      </Swiper>
      {subtitle && <Text>{subtitle}</Text>}
    </Section>
  );
};

export default AboutSlider;
