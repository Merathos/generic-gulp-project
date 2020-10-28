import * as S from './styles';
import { EventHeader, Schedule } from 'components';
import {
  EventRecap,
  Speakers,
  EventsSlider,
  EventReg,
  EventStream,
} from 'containers';

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
      {isActive && <EventStream data={data.stream} />}
      <Speakers data={data.speakers} />
      {isActive && <EventReg data={data.timepad} />}
      <EventsSlider cards={cards.active} />
    </main>
  );
};

export default EventDetails;
