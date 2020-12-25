import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { initializeApollo } from 'lib/apollo';
import { useQuery } from '@apollo/client';
import { Layout, Story, Article } from 'containers';
import { GET_BLOG_CONTENT } from 'graphql/query';
import Head from 'next/head';

import mock from 'mock/index';

const storyPage = () => {
  const router = useRouter();
  const { query } = router;

  const blogData = useQuery(GET_BLOG_CONTENT, {
    variables: {
      slug: query.slug,
      is_preview: query.preview === 'true',
    },
  });
  const blog = useMemo(
    () => (!blogData.loading ? blogData.data.blogs[0] : null),
    [blogData.data]
  );

  if (!blog) return null;

  return (
    <>
      <Head>
        {query.preview === 'true' && (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
      <Layout backButton greyFooter={blog.type === 'history'}>
        {blog.type === 'history' ? (
          <Story back={blog} />
        ) : (
          <Article data={mock.article} back={blog} />
        )}
      </Layout>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_BLOG_CONTENT,
    variables: { slug: query.slug, is_preview: query.preview === 'true' },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default storyPage;
