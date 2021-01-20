import React, { useEffect } from 'react';
import { Layout, Project } from 'containers';
import { useQuery } from '@apollo/client';
import { initializeApollo } from 'lib/apollo';
import { GET_TEAM_CONTENT } from 'graphql/query';
import Head from 'next/head';

import mock from 'mock/index';
import { useRouter } from 'next/router';

const ProjectPage = () => {
  const router = useRouter();
  const { query } = router;

  const { data: contentData } = useQuery(GET_TEAM_CONTENT, {
    variables: {
      slug: query.slug,
      is_preview: query.preview === 'true',
    },
  });
  const team = contentData?.teams[0] || {};

  useEffect(() => {
    if (contentData && Object.keys(team).length === 0) router.push('/404');
  }, [contentData, team]);

  if (Object.keys(team).length === 0) return null;

  return (
    <>
      <Head>
        {team?.name ? (
          <title>Команда {team?.name}</title>
        ) : (
          <title>Команда DINS</title>
        )}
        {team?.description && (
          <meta name="description" content={team?.description} />
        )}
        {query.preview === 'true' && (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
      <Layout backButton smallButton greyFooter plainHeader isVisible={false}>
        <Project data={mock.project} teams={team} />
      </Layout>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_TEAM_CONTENT,
    variables: { slug: query.slug, is_preview: query.preview === 'true' },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default ProjectPage;
