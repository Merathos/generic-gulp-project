import { Layout, VacanciesList } from 'containers';
import mock from 'mock/index';
import { GET_VACANCIES } from 'graphql/query';
import { initializeApollo } from 'lib/apollo';

const catalogPage = ({ vacancies }) => {
  return (
    <Layout backButton>
      <VacanciesList data={mock.catalog} back={vacancies} />
    </Layout>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const {
    data: { vacancies }
  } = await apolloClient.query({
    query: GET_VACANCIES
  });

  return {
    props: {
      vacancies
    }
  };
}

export default catalogPage;
