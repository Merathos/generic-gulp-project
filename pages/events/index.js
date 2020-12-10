import { Layout, Events } from 'containers';
import eventsStatic from 'mock/events';
import { GET_EVENT_CATEGORIES, GET_EVENTS } from 'graphql/queries/events';
import { initializeApollo } from 'lib/apollo';

const eventsPage = ({ event_categories, events }) => {
  return (
    <Layout plainHeader isVisible={false} showFooter={false} greyHeader={false}>
      <Events
        data={eventsStatic}
        eventCategories={event_categories}
        events={events}
        pageSlug="/events"
      />
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
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
    variables: { categories: query.categories },
  });

  return {
    props: {
      event_categories,
      events,
    },
  };
}

export default eventsPage;
