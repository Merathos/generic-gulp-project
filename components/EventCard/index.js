import dayjs from 'dayjs';
import { getStatusImage } from 'helpers/events-helpers';
import * as S from './styles';

const EventCard = ({ event, completed }) => {
  const { category, starts_at, ends_at, status, programs, location } = event;

  const renderStatus = () => {
    if (status.slug === 'offline' && location) {
      return null;
    }
    if (status.slug === 'online') {
      return (
        <>
          <S.Icon
            src={getStatusImage(status.slug)}
            alt={status.name}
            width="16"
            height="16"
          />
          {status.name}
        </>
      );
    }
    if (status.slug === 'streaming') {
      return (
        <>
          <S.Icon
            src={getStatusImage(status.slug)}
            alt={status.name}
            width="16"
            height="16"
          />
          {status.name}
        </>
      );
    }
    return null;
  };

  return (
    <S.CardWrapper>
      <S.TopWrapper>
        <S.Link>
          <S.Title color={category.color}>{category.name}</S.Title>
        </S.Link>
        <S.DateContainer color={category.color}>
          <S.Date>{dayjs(starts_at).format('DD.MM')}</S.Date>
          <S.Time>{`Начало в ${dayjs(starts_at).format('HH.mm')}`}</S.Time>
        </S.DateContainer>
      </S.TopWrapper>
      <S.Status status={status.slug}>{renderStatus()}</S.Status>
      {programs &&
        programs.map(program => (
          <S.TopicContainer key={program.id}>
            <S.TopicName>{program.name}</S.TopicName>
            <S.SpeakerContainer>
              {program.speaker &&
                [program.speaker].map(speaker => (
                  <S.Speaker key={speaker.id}>
                    <S.Pic
                      src={speaker.image.path.normal}
                      alt={speaker.name}
                      width="63"
                      height="63"
                    />
                    <S.NameWrapper>
                      <S.SpeakerName>{speaker.name}</S.SpeakerName>
                      <S.SpeakerJob>{speaker.company}</S.SpeakerJob>
                    </S.NameWrapper>
                  </S.Speaker>
                ))}
            </S.SpeakerContainer>
          </S.TopicContainer>
        ))}
      <S.BottomWrapper>
        {completed === true ? (
          <S.StyledButton>Подробнее о прошедшем мероприятии</S.StyledButton>
        ) : (
          <S.StyledButton type="accent">Зарегистрироваться</S.StyledButton>
        )}
        <S.Location>
          {location ||
            `Мероприятие
проводится онлайн`}
        </S.Location>
      </S.BottomWrapper>
    </S.CardWrapper>
  );
};

export default EventCard;
