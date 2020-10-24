import * as S from './styles';
import { EventHeader, Schedule } from 'components';

const EventDetails = ({ data }) => {
  return (
    <main>
      <EventHeader data={data} />
      <Schedule description={data.description} schedule={data.schedule} />
    </main>
  );
};

export default EventDetails;
