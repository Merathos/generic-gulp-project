import { useRouter } from 'next/router';
import { initializeApollo } from 'lib/apollo';
import { Layout, EventDetails } from 'containers';
import { useQuery } from '@apollo/client';
import { GET_EVENT, GET_EVENT_POLLING } from 'graphql/events';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import dayjs from 'dayjs';

import mock from 'mock/index';

const EventPage = ({ active, description }) => {
  const router = useRouter();
  const { query } = router;
  const [eventStarted, setEventStarted] = useState(true);
  const [isActive, setIsActive] = useState(active);

  const { data: eventData } = useQuery(GET_EVENT, {
    variables: {
      slug: query.slug[0],
      is_preview: query.preview === 'true',
      hash: query.slug[1],
    },
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
    const now = dayjs();
    const endsAt = dayjs(event?.ends_at);

    if (now.isBefore(endsAt) || eventPolling?.status?.slug === 'streaming') {
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
        {event?.name ? (
          <title>Мероприятие {event.name}</title>
        ) : (
          <title>Мероприятие DINS</title>
        )}
        {description && <meta name="description" content={description} />}
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
          hash={query.slug[1]}
        />
      </Layout>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const apolloClient = initializeApollo();

  const eventData = await apolloClient.query({
    query: GET_EVENT,
    variables: {
      slug: query.slug[0],
      is_preview: query.preview === 'true',
      hash: query.slug[1],
    },
  });
  await apolloClient.query({
    query: GET_EVENT_POLLING,
    variables: { slug: query.slug[0], is_preview: query.preview === 'true' },
  });

  let isActive = true;
  let description = '';

  const now = dayjs();

  if (eventData?.data?.events[0]?.ends_at) {
    const endsAt = dayjs(eventData?.data?.events[0]?.ends_at);
    isActive = now.isBefore(endsAt);
  }

  if (isActive && eventData?.data?.events[0]?.previous_content) {
    description = JSON.parse(eventData?.data?.events[0]?.previous_content)[0]
      ?.data?.text;
  } else if (eventData?.data?.events[0]?.future_content) {
    description = JSON.parse(eventData?.data?.events[0]?.future_content)[0]
      ?.data?.text;
  }

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      description,
      active: isActive,
    },
  };
}

export default EventPage;
