import { Layout, Main } from 'containers';
import mock from 'mock/index';
import { initializeApollo } from 'lib/apollo';

import { GET_QUOTES, GET_BANNER } from 'graphql/main';

const mainPage = ({ quotes, banner }) => {
  return (
    <Layout greyFooter plainHeader smallPadding isVisible={false}>
      <Main
        data={mock.main}
        storiesData={mock.stories}
        teams={mock.teams}
        quotes={quotes}
        banner={banner}
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

  return {
    props: {
      quotes,
      banner,
    },
  };
}
export default mainPage;
