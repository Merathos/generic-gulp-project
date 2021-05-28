import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { EventStatus } from 'elements';
import Link from 'next/link';
import { useState } from 'react';
import * as S from './styles';

const EventCard = ({
  category,
  startsAt,
  endsAt,
  status,
  hasVideo,
  programs,
  location,
  regForm,
  slug,
}) => {
  const now = dayjs();
  const router = useRouter();
  const { pathname } = router;
  const [completed] = useState(now.isAfter(endsAt));

  const handleRegistrationClick = () => {
    if (pathname === `/events/${slug}`) {
      if (regForm.current) {
        regForm.current.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router
        .push({
          pathname: `/events/${slug}`,
          hash: 'form',
        })
        .then(() =>
          document.getElementById('form').scrollIntoView({ behavior: 'smooth' })
        );
    }
  };

  const handlePastEventClick = () => {
    router
      .push({
        pathname: `/events/${slug}`,
      })
      .then(() => window.scrollTo(0, 0));
  };

  const renderEventDate = () => {
    const year = now.year();

    if (dayjs(startsAt).year() !== year) {
      return dayjs(startsAt).format('DD.MM.YY');
    }

    return dayjs(startsAt).format('DD.MM');
  };

  const renderEventTime = () => {
    const startTime = dayjs(startsAt).format('HH:mm');
    return `Начало в ${startTime}`;
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
          <S.Date>{renderEventDate()}</S.Date>
          <S.Time>{renderEventTime()}</S.Time>
        </S.DateContainer>
      </S.TopWrapper>
      <EventStatus
        status={status}
        location={location}
        width="16"
        height="16"
        completed={completed}
        hasVideo={hasVideo}
      />
      {programs &&
        programs.map((program) => (
          <S.TopicContainer key={program.id}>
            <S.TopicName>{program.name}</S.TopicName>
            <S.SpeakerContainer>
              {program.speaker &&
                [program.speaker].map((speaker) => (
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
        <S.Location>{location || `Онлайн-мероприятие`}</S.Location>
      </S.BottomWrapper>
    </S.CardWrapper>
  );
};

export default EventCard;
