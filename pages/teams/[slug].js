import React, { useMemo } from 'react';
import { Layout, Project } from 'containers';
import { useQuery } from '@apollo/client';
import { initializeApollo } from 'lib/apollo';
import { GET_TEAM_CONTENT, GET_TEAM_CATEGORIES } from 'graphql/query';
import Head from 'next/head';

import mock from 'mock/index';
import { useRouter } from 'next/router';

const ProjectPage = () => {
  const router = useRouter();
  const { query } = router;

  const categoriesData = useQuery(GET_TEAM_CATEGORIES, {
    variables: {
      slug: query.slug,
    },
  });
  const categories = useMemo(
    () => (!categoriesData.loading ? categoriesData.data.teams[0] : null),
    [categoriesData.data]
  );

  const contentData = useQuery(GET_TEAM_CONTENT, {
    variables: {
      slug: query.slug,
      is_preview: query.preview === 'true',
    },
  });
  const content = useMemo(
    () => (!contentData.loading ? contentData.data.teams[0] : null),
    [contentData.data]
  );

  if (!categories || !content) return null;

  return (
    <>
      <Head>
        {query.preview === 'true' && (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
      <Layout backButton smallButton greyFooter plainHeader isVisible={false}>
        <Project data={mock.project} teams={content} />
      </Layout>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_TEAM_CATEGORIES,
    variables: { slug: query.slug },
  });
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
