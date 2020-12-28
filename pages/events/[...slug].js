import { useRouter } from 'next/router';
import { initializeApollo } from 'lib/apollo';
import { Layout, EventDetails } from 'containers';
import { useQuery } from '@apollo/client';
import { GET_EVENT, GET_EVENT_POLLING } from 'graphql/events';
import { useState, useEffect } from 'react';
import Head from 'next/head';

import mock from 'mock/index';

const EventPage = () => {
  const router = useRouter();
  const { query } = router;
  const [eventStarted, setEventStarted] = useState(true);
  const [isActive, setIsActive] = useState(true);

  const { data: eventData } = useQuery(GET_EVENT, {
    variables: { slug: query.slug[0], is_preview: query.preview === 'true' },
  });

  const { data: eventDataPolling } = useQuery(GET_EVENT_POLLING, {
    variables: { slug: query.slug[0], is_preview: query.preview === 'true' },
    pollInterval: isActive ? 10000 : 0,
  });

  const event = eventData?.events[0] || {};
  const eventPolling = eventDataPolling?.events[0] || {};

  useEffect(() => {
    if (query.preview === 'true') {
      if (query.show === 'before') {
        setIsActive(true);
      } else if (query.show === 'after') {
        setIsActive(false);
      }
      return;
    }
    if (
      eventPolling?.status?.slug === 'streaming' ||
      Date.parse(event?.ends_at) - Date.parse(new Date()) > 0
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [eventPolling]);

  useEffect(() => {
    if (eventData && Object.keys(event).length === 0) router.push('/404');
  }, [eventData]);

  if (Object.keys(event).length === 0) return null;

  return (
    <>
      <Head>
        {query.preview === 'true' && (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
      <Layout plainHeader backButton>
        <EventDetails
          data={mock.events.eventDetails}
          eventData={event}
          eventDataPolling={eventPolling}
          eventStarted={eventStarted}
          setEventStarted={setEventStarted}
          isActive={isActive}
        />
      </Layout>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_EVENT,
    variables: { slug: query.slug[0], is_preview: query.preview === 'true' },
  });
  await apolloClient.query({
    query: GET_EVENT_POLLING,
    variables: { slug: query.slug[0], is_preview: query.preview === 'true' },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default EventPage;
