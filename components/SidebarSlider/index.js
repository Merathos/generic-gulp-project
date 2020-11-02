import GreenArrowLeft from 'public/icons/green-arrow-left.svg';
import GreenArrowRight from 'public/icons/green-arrow-right.svg';
import { useRef } from 'react';
import Swiper from 'react-id-swiper';
import { Article, Element, Img, H4, Text, Arrows, StyledLink } from './styles';

const SidebarSlider = props => {
  const ref = useRef(null);

  const params = {
    loop: true,
  };

  const goNext = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slidePrev();
    }
  };

  const { data } = props;

  return (
    <Article>
      <Swiper ref={ref} {...params}>
        {data.map((el, i) => (
          <Element key={i}>
            <Img
              src={`https://api.develop.dins.d.nimax.ru/${el.imageUrl}`}
              alt={el.title}
            />
            <div>
              <H4>{el.title}</H4>
              <Text>{el.describe}</Text>
            </div>
          </Element>
        ))}
      </Swiper>
      <Arrows>
        <StyledLink onClick={goPrev}>
          <GreenArrowLeft />
        </StyledLink>
        <StyledLink onClick={goNext}>
          <GreenArrowRight />
        </StyledLink>
      </Arrows>
    </Article>
  );
};

export default SidebarSlider;
