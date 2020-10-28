import { Layout } from 'containers';
import mock from 'mock/index';
import { EventDetails } from 'containers';

const EventPage = () => {
  return (
    <Layout plainHeader backButton>
      <EventDetails data={mock.events.eventDetails} cards={mock.events.cards} />
    </Layout>
  );
};

export default EventPage;
