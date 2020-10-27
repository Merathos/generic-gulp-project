import { getStatusImage } from 'helpers/events-helpers';
import * as S from './styles';

const EventCard = ({ event }) => {
  const {
    category,
    starts_at,
    ends_at,
    status,
    programs,
    location,
    completed,
  } = event;

  const starts = new Date(starts_at);
  const startsDay = starts.getDate();
  const startsMonth = starts.getMonth() + 1;

  const renderStatus = () => {
    if (status.slug === 'offline' && location) {
      return null;
    }
    if (status.slug === 'online') {
      return (
        <>
          <S.Icon src={getStatusImage(status.slug)} alt={status.name} />
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
          <S.Date>{`${startsDay}.${
            startsMonth < 10 ? `0${startsMonth}` : startsMonth
          }`}</S.Date>
          <S.Time>{Date.parse(starts_at)}</S.Time>
        </S.DateContainer>
      </S.TopWrapper>
      <S.Status status={status.name}>
        {/* // Need to pass status if it's going */}
        {renderStatus()}
      </S.Status>
      {programs &&
        programs.map(program => (
          <S.TopicContainer key={program.id}>
            <S.TopicName>{program.name}</S.TopicName>
            <S.SpeakerContainer>
              {program.speaker &&
                [program.speaker].map(speaker => (
                  <S.Speaker key={speaker.id}>
                    <S.Pic src={speaker.image.path.normal} alt={speaker.name} />
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
        {completed === false ? (
          <S.StyledButton type="accent">Зарегистрироваться</S.StyledButton>
        ) : (
          <S.StyledButton>Подробнее о прошедшем мероприятии</S.StyledButton>
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
