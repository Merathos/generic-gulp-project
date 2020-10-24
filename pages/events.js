import { Layout, Events } from 'containers';
import eventsStatic from 'mock/events';
import { GET_EVENT_CATEGORIES, GET_EVENTS } from 'graphql/queries/events';
import { initializeApollo } from 'lib/apollo';

const eventsPage = ({ event_categories, events }) => {
  return (
    <Layout plainHeader isVisible={false} showFooter={false}>
      <Events
        data={eventsStatic}
        eventCategories={event_categories}
        events={events}
        pageSlug="/events"
      />
    </Layout>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const {
    data: { event_categories },
  } = await apolloClient.query({
    query: GET_EVENT_CATEGORIES,
  });
  const {
    data: { events },
  } = await apolloClient.query({
    query: GET_EVENTS,
  });

  return {
    props: {
      event_categories,
      events,
    },
    revalidate: 1,
  };
}

export default eventsPage;
