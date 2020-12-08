import Swiper from 'react-id-swiper';
import { useRef, useEffect, useState } from 'react';
import {
  Section,
  NextButton,
  PrevButton,
  Element,
  Container,
  Title,
} from './styles';
import ArrowPrev from '../../public/icons/arrow-prev.svg';
import ArrowNext from '../../public/icons/arrow-next.svg';
import { EventCard } from 'components';

const EventsSlider = ({ cards, regForm }) => {
  const ref = useRef(null);
  const initialWidth = useWindowWidth();
  const params = {
    slidesPerView: 'auto',
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    renderPrevButton: () => {
      return (
        <PrevButton className="swiper-button-prev">
          <ArrowPrev />
        </PrevButton>
      );
    },

    renderNextButton: () => (
      <NextButton className="swiper-button-next">
        <ArrowNext />
      </NextButton>
    ),
  };

  return (
    <Section>
      <Container>
        <Title>Ещё по теме</Title>
        <Swiper
          ref={ref}
          {...params}
          noSwiping={initialWidth > 910 ? false : true}
        >
          {cards.map((card, i) => (
            <Element key={i}>
              <EventCard card={card} regForm={regForm} />
            </Element>
          ))}
        </Swiper>
      </Container>
    </Section>
  );
};

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowWidth;
}

export default EventsSlider;
