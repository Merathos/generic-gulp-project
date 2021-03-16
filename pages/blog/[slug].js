import { useRouter } from 'next/router';
import { initializeApollo } from 'lib/apollo';
import { useQuery } from '@apollo/client';
import { Layout, CustomHead, Story, Article } from 'containers';
import { GET_BLOG_CONTENT } from 'graphql/query';
import Head from 'next/head';
import { useEffect } from 'react';

const storyPage = () => {
  const router = useRouter();
  const { query } = router;

  const { data: blogData } = useQuery(GET_BLOG_CONTENT, {
    variables: {
      slug: query.slug,
      is_preview: query.preview === 'true',
    },
  });
  let blog = {};

  if (blogData?.blogs && blogData?.blogs[0]) {
    blog = blogData?.blogs[0];
  }

  useEffect(() => {
    if (blogData && Object.keys(blog).length === 0) router.push('/404');
  }, [blogData, blog]);

  if (Object.keys(blog).length === 0) return null;

  return (
    <>
      <CustomHead
        title={
          blog.title
            ? `${blog.title} | Блог компании DINS`
            : 'Блог компании DINS'
        }
        description={blog?.description && blog?.description}
      />
      <Head>
        {query.preview === 'true' && (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
      {Object.keys(blog).length > 0 && (
        <Layout
          backButton
          greyFooter={blog.type === 'history'}
          relatedHistoryData={blog.type === 'history' ? blog.related : []}
        >
          {blog.type === 'history' ? (
            <Story back={blog} />
          ) : (
            <Article back={blog} />
          )}
        </Layout>
      )}
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
