import { Layout, TeamList } from 'containers';
import { GET_TEAM_CATEGORIES } from 'graphql/query';
import { initializeApollo } from 'lib/apollo';

import mock from 'mock/index';

const blogPage = ({ teams }) => {
  console.log(teams);
  return (
    <Layout backButton>
      <TeamList mock={mock.teamList} back={teams} />
    </Layout>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'java' } },
    ],
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
