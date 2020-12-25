import { Layout, TeamList } from 'containers';
import { GET_TEAM_CATEGORIES } from 'graphql/query';
import { initializeApollo } from 'lib/apollo';
import mock from 'mock/index';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useQuery } from '@apollo/client';

const teamsPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { data: teamsData } = useQuery(GET_TEAM_CATEGORIES, {
    variables: { stack: router.query.filter },
  });

  useEffect(() => {
    dispatch({
      type: 'SET_CATALOG_FILTERS',
      payload: router.query.filter || [],
    });
  }, []);

  return (
    <Layout anchor hideHav isVisible={false} greyHeader={false} mobileDecor>
      <TeamList mock={mock.teamList} back={teamsData?.teams} />
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_TEAM_CATEGORIES,
    variables: { stack: query.filter },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default teamsPage;
