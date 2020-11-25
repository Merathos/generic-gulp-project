import { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import withApollo from 'lib/withApollo';
import { getDataFromTree } from '@apollo/react-ssr';
import { Layout, Internship } from 'containers';
import mock from 'mock/index';
import { GET_VACANCIES } from 'graphql/query';

const internshipPage = () => {
  const categoriesData = useQuery(GET_VACANCIES, {
    variables: {
      limit: 8,
    },
  });

  const vacancies = useMemo(
    () => (!categoriesData.loading ? categoriesData.data.vacancies : null),
    [categoriesData.data]
  );

  if (!vacancies) return null;

  return (
    <Layout isVisible={false} plainHeader={true}>
      <Internship data={mock.internship} vacancies={vacancies} />
    </Layout>
  );
};

export default withApollo(internshipPage, { getDataFromTree });
