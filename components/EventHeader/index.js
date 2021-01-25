import { getStatusImage, getCategoryBackground } from 'helpers/events-helpers';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { sanitize } from 'isomorphic-dompurify';

import * as S from './styles';

const EventHeader = ({
  recap,
  regForm,
  eventData,
  speakersTitle,
  timezone,
  isActive,
  eventDataPolling,
}) => {
  const {
    name,
    starts_at: startsAt,
    ends_at: endsAt,
    location,
    programs,
    category,
  } = eventData;

  const renderStatus = () => {
    if (!eventDataPolling.status) return null;
    if (eventDataPolling?.status.slug === 'offline' && location) {
      return null;
    }
    if (eventDataPolling?.status.slug === 'online') {
      return (
        <>
          <S.Icon
            src={getStatusImage(eventDataPolling?.status.slug)}
            alt={eventDataPolling?.status.name}
            width="18"
            height="20"
          />
          {eventDataPolling?.status.name}
        </>
      );
    }
    if (eventDataPolling?.status.slug === 'streaming') {
      return (
        <>
          <S.Icon
            src={getStatusImage(eventDataPolling?.status.slug)}
            alt={eventDataPolling?.status.name}
            width="18"
            height="20"
          />
          {eventDataPolling?.status.name}
        </>
      );
    }
    return null;
  };

  const renderEventDate = () => {
    const now = dayjs();
    const year = now.year();

    if (dayjs(startsAt).year() !== year) {
      return dayjs(startsAt)
        .locale('ru')
        .format('D MMMM YYYY');
    }

    return dayjs(startsAt)
      .locale('ru')
      .format('D MMMM');
  };

  const renderEventTime = () => {
    const startTime = dayjs(startsAt).format('HH:mm');
    const endTime = dayjs(endsAt).format('HH:mm');
    return `${startTime}-${endTime}`;
  };

  return (
    <S.GreyHeader>
      <S.Container bgImg={getCategoryBackground(category?.slug)}>
        <S.Grid>
          <S.TopWrapper>
            {eventDataPolling.status && (
              <S.Status status={eventDataPolling.status.slug}>
                {renderStatus()}
              </S.Status>
            )}
            <S.Type
              dangerouslySetInnerHTML={{
                __html: sanitize(name),
              }}
            />
            <S.LocationContainer>
              <S.DateWrapper>
                <p>{renderEventDate()}</p>
                <p>{renderEventTime()}</p>
                <S.DateWrapperTimeZone>{timezone}</S.DateWrapperTimeZone>
              </S.DateWrapper>
              {location && <S.Location>{location}</S.Location>}
            </S.LocationContainer>
          </S.TopWrapper>
          {programs?.length > 0 && (
            <S.SpeakersContainer>
              <S.Title>{speakersTitle}</S.Title>
              {programs.map(program => {
                if (!program?.speaker) return null;
                return (
                  <S.Speaker key={program.speaker?.id}>
                    <S.Pic
                      src={program.speaker?.image?.path?.normal}
                      alt={program.speaker?.name}
                      width="54"
                      height="54"
                    />
                    <S.NameWrapper>
                      <S.SpeakerName>{program.speaker?.name}</S.SpeakerName>
                      <S.SpeakerJob>{program.speaker?.company}</S.SpeakerJob>
                    </S.NameWrapper>
                  </S.Speaker>
                );
              })}
            </S.SpeakersContainer>
          )}
        </S.Grid>
        {isActive && (
          <S.StyledButton
            accent
            onClick={() => {
              regForm?.current.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Зарегистрироваться
          </S.StyledButton>
        )}
        {!isActive && eventData.has_video && (
          <S.StyledButton
            onClick={() => {
              recap.current.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Смотреть запись
          </S.StyledButton>
        )}
      </S.Container>
    </S.GreyHeader>
  );
};

export default EventHeader;
