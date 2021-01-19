import { getStatusImage, getCategoryBackground } from 'helpers/events-helpers';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

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
    name_new_line,
    starts_at: startsAt,
    ends_at: endsAt,
    location,
    speakers,
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
                __html: name_new_line,
              }}
            />
            <S.LocationContainer>
              <S.DateWrapper>
                <p>
                  {`${dayjs(startsAt)
                    .locale('ru')
                    .format('D MMMM')}`}
                </p>
                <p>{`${dayjs(startsAt).format('HH:mm')}-${dayjs(endsAt).format(
                  'HH:mm'
                )}`}</p>
                <S.DateWrapperTimeZone>{timezone}</S.DateWrapperTimeZone>
              </S.DateWrapper>
              {location && <S.Location>{location}</S.Location>}
            </S.LocationContainer>
          </S.TopWrapper>
          {speakers?.length > 0 && (
            <S.SpeakersContainer>
              <S.Title>{speakersTitle}</S.Title>
              {speakers.map(speaker => (
                <S.Speaker key={speaker.id}>
                  <S.Pic
                    src={speaker.image?.path?.normal}
                    alt={speaker.name}
                    width="54"
                    height="54"
                  />
                  <S.NameWrapper>
                    <S.SpeakerName>{speaker.name}</S.SpeakerName>
                    <S.SpeakerJob>{speaker.company}</S.SpeakerJob>
                  </S.NameWrapper>
                </S.Speaker>
              ))}
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
