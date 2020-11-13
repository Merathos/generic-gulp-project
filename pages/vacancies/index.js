import { useMemo, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { Layout, VacanciesList } from 'containers';
import mock from 'mock/index';
import { GET_VACANCIES } from 'graphql/query';
import withApollo from 'lib/withApollo';
import { getDataFromTree } from '@apollo/react-ssr';
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
    <Layout anchor={true} hideHav>
      <VacanciesList data={mock.catalog} back={vacancies || []} />
    </Layout>
  );
};

export default withApollo(catalogPage, { getDataFromTree });
