import * as S from './styles';

const EventHeader = props => {
  const {
    data: { type, isActive, bgImg, status, date, location, speakers },
  } = props;

  return (
    <S.GreyHeader>
      <S.Container bgImg={bgImg}>
        <S.Grid>
          <S.TopWrapper>
            <S.Status status={status.name}>
              <S.Icon src={status.img} alt={status.name} />
              {status.name}
            </S.Status>
            <S.Type>{type}</S.Type>
            <S.LocationContainer>
              <S.DateWrapper>
                <p>{date.day}&nbsp;</p>
                <p>{date.time}</p>
              </S.DateWrapper>
              <S.Location>{location}</S.Location>
            </S.LocationContainer>
          </S.TopWrapper>
          <S.SpeakersContainer>
            <S.Title>{speakers.title}</S.Title>
            {speakers.list.map((speaker, i) => (
              <S.Speaker key={i}>
                <S.Pic src={speaker.img} alt={speaker.name} />
                <S.NameWrapper>
                  <S.SpeakerName>{speaker.name}</S.SpeakerName>
                  <S.SpeakerJob>{speaker.job}</S.SpeakerJob>
                </S.NameWrapper>
              </S.Speaker>
            ))}
          </S.SpeakersContainer>
        </S.Grid>
        {isActive ? (
          <S.StyledButton type="accent">Зарегестрироваться</S.StyledButton>
        ) : (
          <S.StyledButton>Смотреть запись</S.StyledButton>
        )}
      </S.Container>
    </S.GreyHeader>
  );
};

export default EventHeader;
