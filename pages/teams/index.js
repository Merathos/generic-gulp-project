import { Layout, TeamList } from 'containers';
import { GET_TEAM_CATEGORIES } from 'graphql/query';
import { initializeApollo } from 'lib/apollo';
import mock from 'mock/index';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_VACANCY_STACKS } from 'graphql/vacancy';

const teamsPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { data: teamsData } = useQuery(GET_TEAM_CATEGORIES, {
    variables: { stack: router.query.technologies },
  });
  const { data: stacksData } = useQuery(GET_VACANCY_STACKS);

  useEffect(() => {
    dispatch({
      type: 'SET_CATALOG_FILTERS',
      payload: router.query.technologies || [],
    });
  }, []);

  return (
    <Layout anchor hideHav isVisible={false} greyHeader={false} mobileDecor>
      <TeamList
        mock={mock.teamList}
        back={teamsData?.teams}
        stacks={stacksData?.vacancy_stacks}
      />
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_TEAM_CATEGORIES,
    variables: { stack: query.technologies },
  });
  await apolloClient.query({
    query: GET_VACANCY_STACKS,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default teamsPage;
