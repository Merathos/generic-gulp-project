import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { Layout, VacanciesList } from 'containers';
import mock from 'mock/index';
import { GET_VACANCIES } from 'graphql/query';
import withApollo from 'lib/withApollo';
import { getDataFromTree } from '@apollo/react-ssr';

const catalogPage = () => {
  const router = useRouter();

  const categoriesData = useQuery(GET_VACANCIES, {
    variables: {
      search: router.query.search,
      categories: router.query.categories,
      teams: router.query.teams,
      stacks: router.query.stacks,
      internship: router.query.internship,
      english: router.query.english,
    },
  });

  const vacancies = useMemo(
    () => (!categoriesData.loading ? categoriesData.data.vacancies : null),
    [categoriesData.data]
  );

  if (!vacancies) return null;

  return (
    <Layout>
      <VacanciesList data={mock.catalog} back={vacancies} />
    </Layout>
  );
};

export default withApollo(catalogPage, { getDataFromTree });
