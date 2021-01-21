import { Layout, Events } from 'containers';
import eventsStatic from 'mock/events';
import { GET_EVENT_CATEGORIES, GET_EVENTS } from 'graphql/events';
import { initializeApollo } from 'lib/apollo';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Head from 'next/head';

const eventsPage = () => {
  const router = useRouter();
  const { pathname, query } = router;

  const { data: eventCategoriesData } = useQuery(GET_EVENT_CATEGORIES);
  const { data: eventsData } = useQuery(GET_EVENTS, {
    variables: { categories: query.categories },
  });

  return (
    <>
      <Head>
        <title>IT Evenings - мероприятия DINS</title>
        <meta
          name="description"
          content="Анонсы предстоящих мероприятий. Архив прошедших мероприятий."
        />
        {query.categories && <link rel="canonical" href={pathname} />}
      </Head>
      <Layout plainHeader isVisible={false} greyHeader={false}>
        <Events
          data={eventsStatic}
          eventCategories={eventCategoriesData?.event_categories}
          events={eventsData?.events}
        />
      </Layout>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_EVENT_CATEGORIES,
  });
  await apolloClient.query({
    query: GET_EVENTS,
    variables: { categories: query.categories },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default eventsPage;
