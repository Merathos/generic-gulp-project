import { Layout, Main } from 'containers';
import mock from 'mock/index';
import { initializeApollo } from 'lib/apollo';

import {
  GET_QUOTES,
  GET_BANNER,
  GET_BLOGS_MAIN,
  GET_TEAMS_MAIN,
} from 'graphql/main';

const mainPage = ({ quotes, banner, blogs, teams }) => {
  return (
    <Layout greyFooter plainHeader smallPadding isVisible={false}>
      <Main
        data={mock.main}
        storiesData={mock.stories}
        quotes={quotes}
        banner={banner}
        blogs={blogs}
        teams={teams}
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

  return {
    props: {
      quotes,
      banner,
      blogs,
      teams,
    },
  };
}
export default mainPage;
