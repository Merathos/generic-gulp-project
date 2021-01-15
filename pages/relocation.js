import { Layout, RelocationV2 } from 'containers';
import mock from 'mock/index';
import { GET_RELOCATION_BLOGS } from 'graphql/query';
import { useQuery } from '@apollo/client';
import { initializeApollo } from 'lib/apollo';

const Relocation = () => {
  const { data: blogsData } = useQuery(GET_RELOCATION_BLOGS);
  return (
    <Layout greyFooter plainHeader isVisible={false}>
      <RelocationV2 data={mock.relocation} blogs={blogsData?.blogs} />
    </Layout>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_RELOCATION_BLOGS,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export default Relocation;
