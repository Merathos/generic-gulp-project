import { useMemo, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { Layout, VacanciesList } from 'containers';
import mock from 'mock/index';
import { GET_VACANCIES } from 'graphql/query';
import { initializeApollo } from 'lib/apollo';

import { useDispatch } from 'react-redux';

const catalogPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'CATALOG_FILTER_CATEGORIES',
      payload: router.query.categories || '',
    });
    dispatch({
      type: 'SET_CATALOG_FILTERS',
      payload: router.query.filter || [],
    });
    dispatch({
      type: 'SET_INTERNSHIP',
      payload: !!router.query.internship || false,
    });
  }, []);

  const categoriesData = useQuery(GET_VACANCIES, {
    variables: {
      search: router.query.search,
      categories: router.query.categories,
      teams: router.query.teams,
      stacks: router.query.stacks,
      internship: Boolean(router.query.internship),
      english: Boolean(router.query.english),
    },
  });

  const vacancies = useMemo(
    () => (!categoriesData.loading ? categoriesData.data.vacancies : null),
    [categoriesData.data]
  );

  return (
    <Layout anchor hideNav greyHeader={false} mobileDecor>
      <VacanciesList data={mock.catalog} back={vacancies || []} />
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_VACANCIES,
    variables: {
      search: query.search,
      categories: query.categories,
      teams: query.teams,
      stacks: query.stacks,
      internship: Boolean(query.internship),
      english: Boolean(query.english),
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default catalogPage;
