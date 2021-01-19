import { useMemo, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { Layout, VacanciesList } from 'containers';
import mock from 'mock/index';
import {
  GET_VACANCIES,
  GET_VACANCY_CATEGORIES,
  GET_VACANCY_STACKS,
  GET_VACANCY_TEAMS,
} from 'graphql/vacancy';
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

  const vacanciesData = useQuery(GET_VACANCIES, {
    variables: {
      search: router.query.search,
      categories: router.query.categories,
      stacks: router.query.stacks,
      teams: router.query.teams,
      internship: Boolean(router.query.internship),
      english: Boolean(router.query.english),
    },
  });
  const { data: categoriesData } = useQuery(GET_VACANCY_CATEGORIES);
  const { data: stacksData } = useQuery(GET_VACANCY_STACKS);
  const { data: teamsData } = useQuery(GET_VACANCY_TEAMS);

  const vacancies = useMemo(
    () => (!vacanciesData.loading ? vacanciesData.data.vacancies : null),
    [vacanciesData.data]
  );

  return (
    <Layout anchor hideHav greyHeader={false} mobileDecor>
      <VacanciesList
        data={mock.catalog}
        back={vacancies || []}
        categories={categoriesData?.vacancy_categories}
        stacks={stacksData?.vacancy_stacks}
        teams={teamsData?.vacancy_teams}
      />
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
  await apolloClient.query({
    query: GET_VACANCY_CATEGORIES,
  });
  await apolloClient.query({
    query: GET_VACANCY_STACKS,
  });
  await apolloClient.query({
    query: GET_VACANCY_TEAMS,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default catalogPage;
