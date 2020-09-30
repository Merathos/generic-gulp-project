import { Layout, TeamList } from 'containers';
import { GET_TEAM_CATEGORIES } from 'graphql/query';
import { initializeApollo } from 'lib/apollo';

import mock from 'mock/index';

const blogPage = ({ teams }) => {
  return (
    <Layout backButton>
      <div />
    </Layout>
  );
};

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  const {
    data: { teams }
  } = await apolloClient.query({
    query: GET_TEAM_CATEGORIES
  });

  const paths = teams.map(el => ({
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
    data: { teams }
  } = await apolloClient.query({
    query: GET_TEAM_CATEGORIES,
    variables: {
      stack: context.params.slug
    }
  });

  return {
    props: {
      teams
    }
  };
}

export default blogPage;
