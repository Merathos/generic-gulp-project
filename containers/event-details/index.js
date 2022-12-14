import { EventHeader, Schedule, SocialShare } from 'components';
import { Speakers, EventsSlider, EventReg, EventStream } from 'containers';
import { useRef, useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import * as S from './styles';

const EventDetails = ({
  data,
  eventData,
  eventDataPolling,
  eventStarted,
  setEventStarted,
  isActive,
  hash,
}) => {
  const regForm = useRef(null);
  const firstVideoRef = useRef(null);
  const recap = useRef(null);

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <S.Container>
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
          content={eventData?.previous_content}
          programsTitle="Программа мероприятия"
          programs={eventData?.programs}
          regForm={regForm}
          isActive={isActive}
        />
      ) : (
        <Schedule
          content={eventData?.future_content}
          recap={recap}
          isActive={isActive}
        />
      )}
      {isActive && (
        <EventStream
          code={eventDataPolling?.broadcast_link}
          eventStarted={eventStarted}
          setEventStarted={setEventStarted}
          isOpenBroadCast={eventData?.is_open_broadcast}
          startsAt={eventData?.starts_at}
          status={eventDataPolling?.status}
          regForm={regForm}
          data={data.stream}
          hash={hash}
        />
      )}
      {eventData?.programs?.length > 0 && (
        <Speakers speakersTitle="Спикеры" programs={eventData?.programs} />
      )}
      {isActive && eventData?.timepad_id && (
        <EventReg
          regForm={regForm}
          customizeID="114194"
          eventID={eventData.timepad_id}
          removeMarginBottom={!(eventData?.related?.length > 0)}
        />
      )}
      <SocialShare />
      {eventData?.related?.length > 0 && (
        <EventsSlider cards={eventData.related} regForm={regForm} />
      )}
    </S.Container>
  );
};

export default EventDetails;
