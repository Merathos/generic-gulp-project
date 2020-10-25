import Swiper from 'react-id-swiper';
import { Player } from 'components';
import { useRef } from 'react';
import ArrowPrev from 'public/icons/arrow-prev.svg';
import ArrowNext from 'public/icons/arrow-next.svg';
import * as S from './styles';

const PersonalStoriesSlider = ({ data }) => {
  const ref = useRef(null);

  const params = {
    loop: true,
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
      <Swiper
        ref={ref}
        {...params}
        on={{
          slideChange: function() {
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
              <Player withDynamic={true} src={story.audio.src} />
              <S.Link>{story.linkText}</S.Link>
            </S.TextWrapper>
            <S.ImageWrapper>
              <S.Img src={story.picture} alt={story.alt} />
            </S.ImageWrapper>
          </S.Element>
        ))}
      </Swiper>
    </S.Section>
  );
};

export default PersonalStoriesSlider;
