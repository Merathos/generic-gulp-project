import Subtitle from 'elements/Subtitle';
import Swiper from 'react-id-swiper';
import { useRef } from 'react';
import * as S from './styles';

const SliderVacancy = ({ data, background }) => {
  const ref = useRef(null);
  const { title, list } = data;

  return (
    <S.Section>
      <S.H2>{title}</S.H2>
      <Swiper ref={ref}>
        {list && list.map((el, i) => (
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
