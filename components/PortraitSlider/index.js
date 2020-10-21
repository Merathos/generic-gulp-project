import Swiper from 'react-id-swiper';
import { useRef, useState } from 'react';
import * as S from './styles';

const PortraitSlider = ({ pictures }) => {
  const ref = useRef(null);
  const [activeSlide, setActiveSlide] = useState(1);

  const params = {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    renderPrevButton: () => {
      return (
        <>
          <S.PrevButtonMain className="swiper-button-prev">
            <svg width="19" height="16" viewBox="0 0 19 16">
              <path d="M0.292893 7.29314C-0.0976314 7.68366 -0.0976315 8.31682 0.292892 8.70735L6.65685 15.0713C7.04738 15.4618 7.68054 15.4618 8.07107 15.0713C8.46159 14.6808 8.46159 14.0476 8.07107 13.6571L2.41421 8.00024L8.07107 2.34339C8.46159 1.95286 8.46159 1.3197 8.07107 0.929175C7.68054 0.538651 7.04738 0.538651 6.65686 0.929175L0.292893 7.29314ZM19 7.00024L1 7.00024L1 9.00024L19 9.00024L19 7.00024Z" />
            </svg>
          </S.PrevButtonMain>
          <S.PrevButton className="swiper-button-prev">
            <svg width="19" height="16" viewBox="0 0 19 16">
              <path d="M0.292893 7.29314C-0.0976314 7.68366 -0.0976315 8.31682 0.292892 8.70735L6.65685 15.0713C7.04738 15.4618 7.68054 15.4618 8.07107 15.0713C8.46159 14.6808 8.46159 14.0476 8.07107 13.6571L2.41421 8.00024L8.07107 2.34339C8.46159 1.95286 8.46159 1.3197 8.07107 0.929175C7.68054 0.538651 7.04738 0.538651 6.65686 0.929175L0.292893 7.29314ZM19 7.00024L1 7.00024L1 9.00024L19 9.00024L19 7.00024Z" />
            </svg>
          </S.PrevButton>
        </>
      );
    },
    renderNextButton: () => (
      <>
        <S.NextButtonMain className="swiper-button-next">
          <svg width="19" height="16" viewBox="0 0 19 16">
            <path d="M18.7071 8.70735C19.0976 8.31683 19.0976 7.68366 18.7071 7.29314L12.3431 0.929176C11.9526 0.538652 11.3195 0.538652 10.9289 0.929176C10.5384 1.3197 10.5384 1.95287 10.9289 2.34339L16.5858 8.00024L10.9289 13.6571C10.5384 14.0476 10.5384 14.6808 10.9289 15.0713C11.3195 15.4618 11.9526 15.4618 12.3431 15.0713L18.7071 8.70735ZM0 9.00024H18V7.00024H0V9.00024Z" />
          </svg>
        </S.NextButtonMain>
        <S.NextButton className="swiper-button-next">
          <svg width="19" height="16" viewBox="0 0 19 16">
            <path d="M18.7071 8.70735C19.0976 8.31683 19.0976 7.68366 18.7071 7.29314L12.3431 0.929176C11.9526 0.538652 11.3195 0.538652 10.9289 0.929176C10.5384 1.3197 10.5384 1.95287 10.9289 2.34339L16.5858 8.00024L10.9289 13.6571C10.5384 14.0476 10.5384 14.6808 10.9289 15.0713C11.3195 15.4618 11.9526 15.4618 12.3431 15.0713L18.7071 8.70735ZM0 9.00024H18V7.00024H0V9.00024Z" />
          </svg>
        </S.NextButton>
      </>
    )
  };

  return (
    <S.Section
      className={activeSlide === 1 ? 'first-active-slide' : 'inactive-slide'}
    >
      <Swiper
        ref={ref}
        {...params}
        on={{
          slideChange: swiper => {
            setActiveSlide(ref.current.swiper.activeIndex);
          }
        }}
      >
        {pictures.map((el, i) => (
          <S.Element key={i} isMain={el.isMain}>
            <S.Img src={el.src} alt={el.alt} />
            {el.quote && (
              <S.QuoteBlock bgColor={el.bgColor} textColor={el.textColor}>
                <S.Quote>{el.quote}</S.Quote>
                <S.Author>{el.name}</S.Author>
              </S.QuoteBlock>
            )}
          </S.Element>
        ))}
      </Swiper>
    </S.Section>
  );
};

export default PortraitSlider;
