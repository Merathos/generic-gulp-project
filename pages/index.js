import { Layout, Main } from 'containers';
import mock from 'mock/index';
import { initializeApollo } from 'lib/apollo';

import {
  GET_QUOTES,
  GET_BANNER,
  GET_BLOGS_MAIN,
  GET_TEAMS_MAIN,
  GET_VACANCY_CATEGORIES_MAIN,
} from 'graphql/main';

const mainPage = ({ quotes, banner, blogs, teams, vacancy_categories }) => {
  return (
    <Layout greyFooter plainHeader smallPadding isVisible={false}>
      <Main
        data={mock.main}
        storiesData={mock.stories}
        quotes={quotes}
        banner={banner}
        blogs={blogs}
        teams={teams}
        vacancyCat={vacancy_categories}
      />
    </Layout>
  );
};

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const {
    data: { quotes },
  } = await apolloClient.query({
    query: GET_QUOTES,
  });
  const {
    data: { banner },
  } = await apolloClient.query({
    query: GET_BANNER,
  });
  const {
    data: { blogs },
  } = await apolloClient.query({
    query: GET_BLOGS_MAIN,
    variables: { is_home: true },
  });
  const {
    data: { teams },
  } = await apolloClient.query({
    query: GET_TEAMS_MAIN,
    variables: { is_home: true },
  });
  const {
    data: { vacancy_categories },
  } = await apolloClient.query({
    query: GET_VACANCY_CATEGORIES_MAIN,
  });

  return {
    props: {
      quotes,
      banner,
      blogs,
      teams,
      vacancy_categories,
    },
  };
}
export default mainPage;
