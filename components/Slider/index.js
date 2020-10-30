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

const Slider = ({ subtitle, pictures, hasControls, isSmall, fromEditor }) => {
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
          isSmall={isSmall}
        >
          <ArrowPrev />
        </PrevButton>
      );
    },
    renderNextButton: () => (
      <NextButton
        className="swiper-button-next"
        hasControls={hasControls}
        isSmall={isSmall}
      >
        <ArrowNext />
      </NextButton>
    ),
  };

  return (
    <Section hasControls={hasControls}>
      <Swiper ref={ref} {...params}>
        {pictures.map((el, i) => (
          <Element key={i} hasControls={hasControls}>
            <Img
              src={
                fromEditor
                  ? `https://api.develop.dins.d.nimax.ru/${el.imageUrl}`
                  : el.src
              }
              alt={el.title}
              hasControls={hasControls}
              isSmall={isSmall}
            />
            {el.title && <Title>{el.title}</Title>}
          </Element>
        ))}
      </Swiper>
      {subtitle && <Text>{subtitle}</Text>}
    </Section>
  );
};

export default Slider;
