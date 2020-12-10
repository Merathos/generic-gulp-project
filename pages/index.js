import { Layout, Main } from 'containers';
import mock from 'mock/index';
import { initializeApollo } from 'lib/apollo';

import { GET_QUOTES } from 'graphql/main';

const mainPage = ({ quotes }) => {
  return (
    <Layout greyFooter plainHeader smallPadding isVisible={false}>
      <Main
        data={mock.main}
        storiesData={mock.stories}
        teams={mock.teams}
        quotes={quotes}
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

  return {
    props: {
      quotes,
    },
  };
}
export default mainPage;
