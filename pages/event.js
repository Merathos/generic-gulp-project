import { Layout } from 'containers';
import mock from 'mock/index';
import { EventDetails } from 'containers';

const EventPage = () => {
  return (
    <Layout plainHeader backButton>
      <EventDetails data={mock.events.eventDetails} />
    </Layout>
  );
};

export default EventPage;
