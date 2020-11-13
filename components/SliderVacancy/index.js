import Subtitle from 'elements/Subtitle';
import ArrowPrev from '../../public/icons/arrow-prev.svg';
import ArrowNext from '../../public/icons/arrow-next.svg';
import Swiper from 'react-id-swiper';
import { useRef } from 'react';
import * as S from './styles';

const SliderVacancy = ({ data, background }) => {
  const { title, list } = data;
  const ref = useRef(null);

  const params = {
    slidesPerView: 'auto',
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    renderPrevButton: () => {
      return (
        <S.PrevButton className="swiper-button-prev">
          <ArrowPrev />
        </S.PrevButton>
      );
    },

    renderNextButton: () => (
      <S.NextButton className="swiper-button-next">
        <ArrowNext />
      </S.NextButton>
    ),
  };

  return (
    <S.Section>
      <S.H2>{title}</S.H2>
      <Swiper ref={ref} {...params}>
        {list &&
          list.map((el, i) => (
            <S.Element key={i}>
              <S.Number background={background}>{`0${i + 1}`}</S.Number>
              <S.Title>{el.title}</S.Title>
              <S.Text>{el.text}</S.Text>
              {el.subtitle && <Subtitle>{el.subtitle}</Subtitle>}
            </S.Element>
          ))}
      </Swiper>
    </S.Section>
  );
};

export default SliderVacancy;
