import * as S from './styles';

const EventHeader = props => {
  const {
    data: { type, isActive, bgImg, status, date, location, speakers },
    recap,
    regForm,
  } = props;

  return (
    <S.GreyHeader>
      <S.Container bgImg={bgImg}>
        <S.Grid>
          <S.TopWrapper>
            <S.Status status={status.name}>
              <S.Icon
                src={status.img}
                alt={status.name}
                width="18"
                height="20"
              />
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
                <S.Pic
                  src={speaker.img}
                  alt={speaker.name}
                  width="54"
                  height="54"
                />
                <S.NameWrapper>
                  <S.SpeakerName>{speaker.name}</S.SpeakerName>
                  <S.SpeakerJob>{speaker.job}</S.SpeakerJob>
                </S.NameWrapper>
              </S.Speaker>
            ))}
          </S.SpeakersContainer>
        </S.Grid>
        {isActive ? (
          <S.StyledButton
            accent
            onClick={() => {
              regForm.current.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Зарегестрироваться
          </S.StyledButton>
        ) : (
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
