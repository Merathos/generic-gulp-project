import { Media } from 'components';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { getNoun } from 'helpers/get-noun';
import { getStatusImage } from 'helpers/events-helpers';
import * as S from './styles';

const EventStream = ({
  data: { video },
  code,
  domain,
  title,
  isOpenBroadCast,
  startsAt,
  status,
  eventStarted,
  setEventStarted,
}) => {
  const [isStartingIn24Hrs, setIsStartingIn24Hrs] = useState(false);
  const [videoCode, setVideoCode] = useState('');
  const [startsIn, setStartsIn] = useState('');

  const handleLinkClick = () => {
    document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (code?.length > 0 && code !== videoCode) {
      setVideoCode(code);
    }
  }, [code]);

  const tick = interval => {
    const now = dayjs();
    const diff = dayjs(startsAt).diff(now, 'minutes');
    if (diff <= 0) {
      clearInterval(interval);
      setEventStarted(true);
    } else {
      const hours = Math.floor(diff / 60);
      const minutes = diff - hours * 60;
      const message = `${
        hours > 0 ? `${hours} ${getNoun(hours, 'час', 'часа', 'часов')} ` : ''
      }${minutes} ${getNoun(minutes, 'минуту', 'минуты', 'минут')}`;
      setStartsIn(message);
    }
  };

  useEffect(() => {
    const now = dayjs();
    const diff = dayjs(startsAt).diff(now, 'day');

    if (diff <= 0) {
      setIsStartingIn24Hrs(true);
    }
    tick();
    const interval = setInterval(() => {
      tick(interval);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const message = () => {
    if (!isOpenBroadCast) {
      return (
        <S.Msg>
          Трансляция начнется в {`${dayjs(startsAt).format('HH:mm')}`} и будет
          доступна после{' '}
          <S.RegisterLink onClick={handleLinkClick}>регистрации</S.RegisterLink>
        </S.Msg>
      );
    }
    if (isStartingIn24Hrs || eventStarted) {
      return (
        <S.Msg status={status?.slug} isStartingIn24Hrs={isStartingIn24Hrs}>
          {eventStarted ? (
            <>
              <S.Icon
                src={getStatusImage(status?.slug)}
                alt={status?.name}
                width="16"
                height="16"
              />
              {status?.name}
            </>
          ) : (
            <>
              <S.TimeWatch
                src="/emodzi/11.png"
                width="26"
                height="26"
                alt="Таймер"
              />{' '}
              Трансляция начнется через{' '}
              <S.TimeUntilStart>{startsIn}</S.TimeUntilStart>
            </>
          )}
        </S.Msg>
      );
    }
    return (
      <S.Msg>
        Трансляция начнется в {`${dayjs(startsAt).format('HH:mm')}`} и будет
        доступна на странице
      </S.Msg>
    );
  };

  return (
    <S.Section>
      <S.Container>
        <S.Title>{title}</S.Title>
        {message()}
      </S.Container>
      {videoCode && (
        <S.StreamWrapper>
          <Media
            code={videoCode}
            data={video}
            hasCircle
            stretched
            // autoplay={eventStarted}
          />
          <S.Chat>
            <iframe
              title="Youtube chat"
              allowFullScreen=""
              height="400"
              src={`https://www.youtube.com/live_chat?v=${videoCode}&embed_domain=${domain}`}
              width="1100"
            />
          </S.Chat>
        </S.StreamWrapper>
      )}
    </S.Section>
  );
};

export default EventStream;
