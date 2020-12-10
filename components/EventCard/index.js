import dayjs from 'dayjs';
import { getStatusImage } from 'helpers/events-helpers';
import Router from 'next/router';
import * as S from './styles';

const EventCard = ({
  category,
  startsAt,
  endsAt,
  status,
  programs,
  location,
  completed,
  regForm,
}) => {
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

  const handleRegistrationClick = () => {
    if (Router.pathname === `/event`) {
      regForm?.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      Router.push({
        pathname: '/event',
        hash: 'form',
      }).then(() =>
        document.getElementById('form').scrollIntoView({ behavior: 'smooth' })
      );
    }
  };

  const handlePastEventClick = () => {
    Router.push({
      pathname: '/event',
    }).then(() => window.scrollTo(0, 0));
  };

  return (
    <S.CardWrapper>
      <S.TopWrapper>
        <S.Link>
          <S.Title color={category.color}>{category.name}</S.Title>
        </S.Link>
        <S.DateContainer color={category.color}>
          <S.Date>{dayjs(startsAt).format('DD.MM')}</S.Date>
          <S.Time>{`Начало в ${dayjs(startsAt).format('HH.mm')}`}</S.Time>
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
          <S.StyledButton onClick={handlePastEventClick}>
            Подробнее о прошедшем мероприятии
          </S.StyledButton>
        ) : (
          <S.StyledButton accent onClick={handleRegistrationClick}>
            Зарегистрироваться
          </S.StyledButton>
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
