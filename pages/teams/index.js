import { Layout, TeamList } from 'containers';
import { GET_TEAM_CATEGORIES } from 'graphql/query';
import { initializeApollo } from 'lib/apollo';
import mock from 'mock/teams';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_VACANCY_STACKS } from 'graphql/vacancy';
import Head from 'next/head';

const teamsPage = () => {
  const router = useRouter();
  const { pathname, query } = router;
  const dispatch = useDispatch();

  const { data: teamsData } = useQuery(GET_TEAM_CATEGORIES, {
    variables: { stack: router.query.technologies },
  });
  const { data: stacksData } = useQuery(GET_VACANCY_STACKS, {
    variables: { is_team: true },
  });

  useEffect(() => {
    dispatch({
      type: 'SET_CATALOG_FILTERS',
      payload: query.technologies || [],
    });
  }, []);

  return (
    <>
      <Head>
        <title>Команды DINS</title>
        <meta
          name="description"
          content="Продукт, в разработке которого мы участвуем, многогранен. Наши инженеры работают над обеспечением качественного видео и аудио, развивают контактный центр, мессенджер и другие части платформы."
        />
        {query.technologies && <link rel="canonical" href={pathname} />}
      </Head>
      <Layout anchor hideHav isVisible={false} greyHeader={false} mobileDecor>
        <TeamList
          mock={mock.teamList}
          back={teamsData?.teams}
          stacks={stacksData?.vacancy_stacks}
        />
      </Layout>
    </>
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
    variables: { is_team: true },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default teamsPage;
