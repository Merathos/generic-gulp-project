import { Layout } from 'containers';
import mock from 'mock/index';
import { EventDetails } from 'containers';

const EventArchived = () => {
  return (
    <Layout plainHeader backButton>
      <EventDetails
        data={mock.events.eventDetailsArch}
        cards={mock.events.cards}
      />
    </Layout>
  );
};

export default EventArchived;
