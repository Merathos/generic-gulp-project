import { EventHeader, Schedule } from 'components';
import {
  EventRecap,
  Speakers,
  EventsSlider,
  EventReg,
  EventStream,
} from 'containers';
import * as S from './styles';

const EventDetails = ({ data, cards }) => {
  const { isActive } = data;

  return (
    <main>
      <EventHeader data={data} />
      {isActive ? (
        <Schedule description={data.description} schedule={data.schedule} />
      ) : (
        <EventRecap data={data.eventRecap} />
      )}
      {isActive && (
        <EventStream
          data={data.stream}
          code="5qap5aO4i9A"
          domain="dins.vercel.app"
          // domain="localhost"
        />
      )}
      <Speakers data={data.speakers} />
      {isActive && <EventReg data={data.timepad} />}
      <EventsSlider cards={cards.active} />
    </main>
  );
};

export default EventDetails;
