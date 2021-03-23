import { EventCard } from 'components';
import { useRef } from 'react';
import Swiper from 'react-id-swiper';
import useWindowWidth from 'helpers/useWindowWidth';
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
                hasVideo={card.has_video}
              />
            </Element>
          ))}
        </Swiper>
      </Container>
    </Section>
  );
};

export default EventsSlider;
