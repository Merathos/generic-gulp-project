import { EventCard } from 'components';
import { useEffect, useRef, useState } from 'react';
import Swiper from 'react-id-swiper';
import ArrowNext from '../../public/icons/arrow-next.svg';
import ArrowPrev from '../../public/icons/arrow-prev.svg';
import {
  Container,
  Element,
  NextButton,
  PrevButton,
  Section,
  Title,
} from './styles';

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
        <Swiper ref={ref} {...params} noSwiping={!(initialWidth > 910)}>
          {cards.map((card, i) => (
            <Element key={i}>
              <EventCard
                category={card.category}
                startsAt={card.starts_at}
                endsAt={card.ends_at}
                status={card.status}
                programs={card.programs}
                location={card.location}
                regForm={regForm}
                slug={card.slug}
              />
            </Element>
          ))}
        </Swiper>
      </Container>
    </Section>
  );
};

export default EventsSlider;
