import { Layout, Relocation } from 'containers';
import mock from 'mock/index';
import { GET_RELOCATION_BLOGS } from 'graphql/query';
import { initializeApollo } from 'lib/apollo';

const relocationPage = ({ blogs }) => {
  return (
    <Layout backButton greyFooter>
      <Relocation data={mock.relocation} blogs={blogs} />
    </Layout>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const {
    data: { blogs }
  } = await apolloClient.query({
    query: GET_RELOCATION_BLOGS
  });

  return {
    props: {
      blogs
    }
  };
}

export default relocationPage;
