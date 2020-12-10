import Router from 'next/router';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { useState, useEffect } from 'react';
import { Container, Title, Date, EventButton } from './styles';

const BenefitsBanner = ({ data }) => {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const now = dayjs();
    const endsAt = dayjs(data.ends_at);
    setCompleted(endsAt.isBefore(now));
  }, []);

  const handleRegistrationClick = () => {
    if (Router.pathname === `/events`) {
      regForm?.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      Router.push({
        pathname: `/events/${data.slug}`,
        hash: 'form',
      }).then(() =>
        document.getElementById('form').scrollIntoView({ behavior: 'smooth' })
      );
    }
  };

  const handlePastEventClick = () => {
    Router.push({
      pathname: `/events/${data.slug}`,
    }).then(() => window.scrollTo(0, 0));
  };

  return (
    <Container>
      <Title>{data.name}</Title>
      <Date>{`${dayjs(data.starts_at)
        .locale('ru')
        .format('D MMMM')} ${dayjs(data.starts_at).format('HH:mm')}-${dayjs(
        data.ends_at
      ).format('HH:mm')}`}</Date>
      {completed === true ? (
        <EventButton onClick={handlePastEventClick}>
          Подробнее о прошедшем мероприятии
        </EventButton>
      ) : (
        <EventButton accent onClick={handleRegistrationClick}>
          Зарегистрироваться
        </EventButton>
      )}
    </Container>
  );
};

export default BenefitsBanner;
