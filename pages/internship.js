import { Layout, Internship } from 'containers';
import mock from 'mock/index';
import { initializeApollo } from 'lib/apollo';
import { GET_VACANCIES } from 'graphql/query';
import { useQuery } from '@apollo/client';

const internshipPage = () => {
  const { data: vacanciesData } = useQuery(GET_VACANCIES, {
    variables: { internship: true, limit: 6 },
  });

  return (
    <Layout isVisible={false} plainHeader smallIndent>
      <Internship
        data={mock.internship}
        vacanciesData={vacanciesData?.vacancies}
      />
    </Layout>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_VACANCIES,
    variables: { internship: true, limit: 6 },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}
export default internshipPage;
