import { EventHeader, Schedule } from 'components';
import { Speakers, EventsSlider, EventReg, EventStream } from 'containers';
import { useRef, useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

const EventDetails = ({
  data,
  eventData,
  eventDataPolling,
  eventStarted,
  setEventStarted,
  isActive,
}) => {
  const regForm = useRef(null);
  const firstVideoRef = useRef(null);
  const recap = useRef(null);

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <main>
      {eventData && (
        <EventHeader
          data={data}
          recap={recap}
          regForm={regForm}
          firstVideoRef={firstVideoRef}
          eventData={eventData}
          eventDataPolling={eventDataPolling}
          speakersTitle="Спикеры"
          isActive={isActive}
          timezone="(MSK)"
        />
      )}
      {isActive ? (
        <Schedule
          content={eventData?.future_content}
          programsTitle="Программа мероприятия"
          programs={eventData?.programs}
          regForm={regForm}
          isActive={isActive}
        />
      ) : (
        <Schedule
          content={eventData?.previous_content}
          recap={recap}
          isActive={isActive}
        />
      )}
      {isActive && eventDataPolling?.status !== 'offline' && (
        <EventStream
          title="Прямая трансляция"
          code={eventDataPolling?.broadcast_link}
          eventStarted={eventStarted}
          setEventStarted={setEventStarted}
          isOpenBroadCast={eventData?.is_open_broadcast}
          startsAt={eventData?.starts_at}
          status={eventDataPolling?.status}
          regForm={regForm}
          data={data.stream}
          domain="dins.vercel.app"
        />
      )}
      {eventData?.speakers?.length > 0 && (
        <Speakers speakersTitle="Спикеры" speakers={eventData?.speakers} />
      )}
      {isActive && eventData?.timepad_id && (
        <EventReg
          regForm={regForm}
          customizeID="114194"
          eventID={eventData.timepad_id}
        />
      )}
      {eventData?.related?.length > 0 && (
        <EventsSlider cards={eventData.related} regForm={regForm} />
      )}
    </main>
  );
};

export default EventDetails;
