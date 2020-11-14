import { Layout, TeamList } from 'containers';
import { GET_TEAM_CATEGORIES } from 'graphql/query';
import { initializeApollo } from 'lib/apollo';
import mock from 'mock/index';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const teamsPage = ({ teams }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'SET_CATALOG_FILTERS',
      payload: router.query.filter || [],
    });
  }, []);

  return (
    <Layout anchor={true} hideHav>
      <TeamList mock={mock.teamList} back={teams} />
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const apolloClient = initializeApollo();

  const {
    data: { teams },
  } = await apolloClient.query({
    query: GET_TEAM_CATEGORIES,
    variables: { stack: query.tags },
  });

  return {
    props: {
      teams,
    },
  };
}

export default teamsPage;
