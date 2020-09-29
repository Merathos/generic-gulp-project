import { Layout, Vacancy } from 'containers';
import { initializeApollo } from 'lib/apollo';
import { GET_VACANCY_CONTENT } from 'graphql/query';
import mock from 'mock/index';

const vacancyPage = ({ vacancies }) => {
  return (
    <Layout backButton>
      <Vacancy data={mock.vacancy} back={vacancies[0]} />
    </Layout>
  )
};

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  const {
    data: { vacancies }
  } = await apolloClient.query({
    query: GET_VACANCY_CONTENT
  });

  const paths = vacancies.map(el => ({
    params: { slug: el.slug }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps(context) {
  const apolloClient = initializeApollo();

  const {
    data: { vacancies }
  } = await apolloClient.query({
    query: GET_VACANCY_CONTENT,
    variables: {
      slug: context.params.slug
    }
  });

  return {
    props: {
      vacancies
    }
  };
}

export default vacancyPage;
