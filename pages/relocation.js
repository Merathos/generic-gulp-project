import { Layout, RelocationV2 } from 'containers';
import mock from 'mock/relocation';
import { GET_RELOCATION_BLOGS } from 'graphql/query';
import { useQuery } from '@apollo/client';
import { initializeApollo } from 'lib/apollo';
import Head from 'next/head';

const Relocation = () => {
  const { data: blogsData } = useQuery(GET_RELOCATION_BLOGS);
  return (
    <>
      <Head>
        <title>Релокация: DINS поможет в переезде</title>
        <meta
          name="description"
          content="У нас есть коллеги, которые работают удаленно. Если ты живешь в другом городе, но разделяешь любовь к Петербургу и хочешь переехать, мы поможем тебе."
        />
      </Head>
      <Layout greyFooter plainHeader isVisible={false}>
        <RelocationV2 data={mock.relocation} blogs={blogsData?.blogs} />
      </Layout>
    </>
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
