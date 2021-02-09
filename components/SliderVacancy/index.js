import Subtitle from 'elements/Subtitle';
import Swiper from 'react-id-swiper';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import ArrowPrev from '../../public/icons/arrow-prev.svg';
import ArrowNext from '../../public/icons/arrow-next.svg';
import * as S from './styles';

const SliderVacancy = ({ data, list, isVacancyPage }) => {
  let language;
  if (isVacancyPage) {
    language = useSelector((state) => state.language);
  }

  const ref = useRef(null);

  const params = {
    slidesPerView: 'auto',
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    watchOverflow: true,

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
      <S.H2>{language ? data.titleEn : data.title}</S.H2>
      <Swiper ref={ref} {...params}>
        {list &&
          list.map((item, i) => (
            <S.Element key={item.id}>
              <S.Number>{`0${i + 1}`}</S.Number>
              <S.Title>{item.title}</S.Title>
              {item.description && <S.Text>{item.description}</S.Text>}
              {item.duration && <S.Duration>{item.duration}</S.Duration>}
            </S.Element>
          ))}
      </Swiper>
    </S.Section>
  );
};

export default SliderVacancy;
