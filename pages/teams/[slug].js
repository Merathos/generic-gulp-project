import React, { useMemo } from 'react';
import { Layout, Project } from 'containers';
import { useQuery } from '@apollo/client';
import { getDataFromTree } from '@apollo/react-ssr';
import { GET_TEAM_CONTENT, GET_TEAM_CATEGORIES } from 'graphql/query';
import withApollo from 'lib/withApollo';

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
    <Layout backButton smallButton greyFooter plainHeader isVisible={false}>
      <Project data={mock.project} teams={content} />
    </Layout>
  );
};

export default withApollo(ProjectPage, { getDataFromTree });
