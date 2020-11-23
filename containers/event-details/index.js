import { EventHeader, Schedule } from 'components';
import {
  EventRecap,
  Speakers,
  EventsSlider,
  EventReg,
  EventStream,
} from 'containers';
import { useRef } from 'react';
import * as S from './styles';

const EventDetails = ({ data, cards }) => {
  const { isActive } = data;
  const regForm = useRef(null);
  const recap = useRef(null);

  return (
    <main>
      <EventHeader data={data} recap={recap} regForm={regForm} />
      {isActive ? (
        <Schedule
          description={data.description}
          schedule={data.schedule}
          regForm={regForm}
        />
      ) : (
        <EventRecap data={data.eventRecap} recap={recap} />
      )}
      {isActive && (
        <EventStream
          data={data.stream}
          code="5qap5aO4i9A"
          domain="dins.vercel.app"
        />
      )}
      <Speakers data={data.speakers} />
      {isActive && <EventReg data={data.timepad} regForm={regForm} />}
      <EventsSlider cards={cards.active} />
    </main>
  );
};

export default EventDetails;
