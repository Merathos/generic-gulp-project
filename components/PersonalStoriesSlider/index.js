import Swiper from 'react-id-swiper';
import { Player } from 'components';
import { useRef, useState } from 'react';
import ArrowPrev from 'public/icons/arrow-prev.svg';
import ArrowNext from 'public/icons/arrow-next.svg';
import * as S from './styles';

const PersonalStoriesSlider = ({ data }) => {
  const [activeSlide, setActiveSlide] = useState(1);
  const ref = useRef(null);

  const params = {
    loop: true,
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
          slideChange: function() {
            let activeIndex = ref.current.swiper.activeIndex;

            if (activeIndex === 0) {
              activeIndex = data.length;
            }
            if (activeIndex > data.length) {
              activeIndex = 1;
            }
            setActiveSlide(activeIndex);

            if (ref.current.swiper.isEnd) {
              ref.current.swiper.loopDestroy();
              ref.current.swiper.loopCreate();
            }
            if (ref.current.swiper.isBeginning) {
              ref.current.swiper.loopDestroy();
              ref.current.swiper.loopCreate();
            }
          },
        }}
      >
        {data.map((story, index) => (
          <S.Element key={index}>
            <S.TextWrapper>
              <S.Title>{story.title}</S.Title>
              <S.Text>{story.text}</S.Text>
              <Player
                isPaused={activeSlide !== index + 1}
                withDynamic={true}
                src={story.audio.src}
              />
              <S.Link href="#">{story.linkText}</S.Link>
            </S.TextWrapper>
            <S.ImageWrapper>
              <S.Img
                src={story.picture}
                alt={story.alt}
                width={story.size.width}
                height={story.size.height}
              />
            </S.ImageWrapper>
          </S.Element>
        ))}
      </Swiper>
    </S.Section>
  );
};

export default PersonalStoriesSlider;
