import { getStatusImage } from 'helpers/events-helpers';
import * as S from './styles';

const EventStatus = ({ status, location, width, height }) => {
  const renderStatus = () => {
    if (status?.slug === 'offline' && location) {
      return null;
    }
    if (status?.slug === 'online') {
      return (
        <>
          <S.Icon
            src={getStatusImage(status?.slug)}
            alt={status.name}
            width={width || '16'}
            height={height || '16'}
          />
          {status.name}
        </>
      );
    }
    if (status?.slug === 'streaming') {
      return (
        <>
          <S.Icon
            src={getStatusImage(status?.slug)}
            alt={status.name}
            width={width || '16'}
            height={height || '16'}
          />
          {status.name}
        </>
      );
    }
    return null;
  };

  return <S.Status status={status?.slug}>{renderStatus()}</S.Status>;
};

export default EventStatus;
