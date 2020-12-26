import dayjs from 'dayjs';
import Router from 'next/router';
import { EventStatus } from 'elements';
import Link from 'next/link';
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
  slug,
}) => {
  const handleRegistrationClick = () => {
    if (Router.pathname === `/events/${slug}`) {
      regForm?.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      Router.push({
        pathname: `/events/${slug}`,
        hash: 'form',
      }).then(() =>
        document.getElementById('form').scrollIntoView({ behavior: 'smooth' })
      );
    }
  };

  const handlePastEventClick = () => {
    Router.push({
      pathname: `/events/${slug}`,
    }).then(() => window.scrollTo(0, 0));
  };

  return (
    <S.CardWrapper>
      <S.TopWrapper>
        <Link href={`/events/${slug}`} passHref>
          <S.Link>
            <S.Title color={category.color}>{category.name}</S.Title>
          </S.Link>
        </Link>
        <S.DateContainer color={category.color}>
          <S.Date>{dayjs(startsAt).format('DD.MM')}</S.Date>
          <S.Time>{`Начало в ${dayjs(startsAt).format('HH.mm')}`}</S.Time>
        </S.DateContainer>
      </S.TopWrapper>
      <EventStatus status={status} location={location} width="16" height="16" />
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
