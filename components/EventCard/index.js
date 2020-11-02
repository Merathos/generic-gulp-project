import * as S from './styles';

const EventCard = props => {
  const {
    card: { type, color, date, status, topics, location },
    completed = false,
  } = props;

  return (
    <S.CardWrapper>
      <S.TopWrapper>
        <S.Link href="#">
          <S.Title color={color}>{type}</S.Title>
        </S.Link>
        <S.DateContainer color={color}>
          <S.Date>{date.day}</S.Date>
          <S.Time>{date.time}</S.Time>
        </S.DateContainer>
      </S.TopWrapper>
      <S.Status status={status.name}>
        <S.Icon src={status.img} alt={status.name} width="16" height="16" />
        {status.name}
      </S.Status>
      {topics.map((topic, i) => (
        <S.TopicContainer key={i}>
          <S.TopicName>{topic.title}</S.TopicName>
          <S.SpeakerContainer>
            {topic.speakers.map((speaker, j) => (
              <S.Speaker key={j}>
                <S.Pic
                  src={speaker.img}
                  alt={speaker.name}
                  width="63"
                  height="63"
                />
                <S.NameWrapper>
                  <S.SpeakerName>{speaker.name}</S.SpeakerName>
                  <S.SpeakerJob>{speaker.job}</S.SpeakerJob>
                </S.NameWrapper>
              </S.Speaker>
            ))}
          </S.SpeakerContainer>
        </S.TopicContainer>
      ))}
      <S.BottomWrapper>
        {completed === false ? (
          <S.StyledButton accent={true}>Зарегистрироваться</S.StyledButton>
        ) : (
          <S.StyledButton>Подробнее о прошедшем мероприятии</S.StyledButton>
        )}
        <S.Location>{location}</S.Location>
      </S.BottomWrapper>
    </S.CardWrapper>
  );
};

export default EventCard;
