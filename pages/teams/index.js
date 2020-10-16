import { Layout, TeamList } from 'containers';
import { GET_TEAM_CATEGORIES } from 'graphql/query';
import { initializeApollo } from 'lib/apollo';

import mock from 'mock/index';

const teamsPage = ({ teams }) => {
  return (
    <Layout>
      <TeamList mock={mock.teamList} back={teams} />
    </Layout>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const {
    data: { teams }
  } = await apolloClient.query({
    query: GET_TEAM_CATEGORIES
  });

  return {
    props: {
      teams
    }
  };
}

export default teamsPage;
