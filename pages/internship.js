import { Layout, Internship } from 'containers';
import mock from 'mock/index';
import { GET_VACANCIES } from 'graphql/query';
import { initializeApollo } from 'lib/apollo';

const internshipPage = ({ vacancies }) => {
  return (
    <Layout backButton>
      <Internship data={mock.internship} vacancies={vacancies} />
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

export default internshipPage;
