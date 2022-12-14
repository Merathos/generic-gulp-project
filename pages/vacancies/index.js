import { useMemo, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { Layout, CustomHead, VacanciesList } from 'containers';
import {
  GET_VACANCIES,
  GET_VACANCY_CATEGORIES,
  GET_VACANCY_STACKS,
  GET_VACANCY_TEAMS,
} from 'graphql/vacancy';
import { initializeApollo } from 'lib/apollo';

import mock from 'mock/vacancies';

const TITLE = 'Вакансии компании DINS';
const DESCRIPTION =
  'Вакансии для разработчиков, QA и DevOps-инженеров, тимлидов и архитекторов.';

const catalogPage = () => {
  const router = useRouter();
  const { pathname, query } = router;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'CATALOG_FILTER_CATEGORIES',
      payload: query.categories || '',
    });
    dispatch({
      type: 'SET_CATALOG_FILTERS',
      payload: query.filter || [],
    });
    dispatch({
      type: 'SET_INTERNSHIP',
      payload: !!query.internship || false,
    });
  }, []);

  const vacanciesData = useQuery(GET_VACANCIES, {
    variables: {
      search: query.search,
      categories: query.categories,
      stacks: query.technologies,
      teams: query.teams,
      internship: Boolean(query.internship),
      english: Boolean(query.english),
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
    <>
      <CustomHead title={TITLE} description={DESCRIPTION} />
      <Head>
        {(query.search ||
          query.categories ||
          query.technologies ||
          query.teams ||
          query.internship ||
          query.english) && <link rel="canonical" href={pathname} />}
      </Head>
      <Layout anchor hideHav greyHeader={false} mobileDecor>
        <VacanciesList
          data={mock.catalog}
          back={vacancies || []}
          categories={categoriesData?.vacancy_categories}
          stacks={stacksData?.vacancy_stacks}
          teams={teamsData?.vacancy_teams}
        />
      </Layout>
    </>
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
