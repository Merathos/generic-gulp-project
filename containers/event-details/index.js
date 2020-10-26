import * as S from './styles';
import { EventHeader, Schedule } from 'components';
import { EventRecap, Speakers, EventsSlider } from 'containers';

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
      <Speakers data={data.speakers} />
      <EventsSlider cards={cards.active} />
    </main>
  );
};

export default EventDetails;
