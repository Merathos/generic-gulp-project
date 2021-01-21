import { Layout, Blogs } from 'containers';
import mock from 'mock/index';
import { GET_BLOGS_LIST, GET_BLOGS_CATEGORIES } from 'graphql/blogs';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { initializeApollo } from 'lib/apollo';
import useFetchMore from 'helpers/useFetchMore';
import { Loader } from 'elements';
import Head from 'next/head';

const BlogList = () => {
  const router = useRouter();
  const { pathname, query } = router;
  const { data: blogsCategories } = useQuery(GET_BLOGS_CATEGORIES);
  const { data, fetchMore, networkStatus } = useQuery(GET_BLOGS_LIST, {
    variables: {
      categories: query.category,
      limit: 8,
    },
    notifyOnNetworkStatusChange: true,
  });

  const mergeBlogs = (previousResult, fetchMoreResult) => {
    return {
      ...previousResult,
      ...fetchMoreResult,
      blogs: [...previousResult?.blogs, ...fetchMoreResult.blogs],
    };
  };

  const moreEnd = fetchMoreResult => fetchMoreResult.blogs.length === 0;

  useFetchMore({
    data,
    fetchMore,
    isEnd: moreEnd,
    merge: mergeBlogs,
    offset: data?.blogs?.length,
    limit: 9,
    resetNext: query.category,
  });

  return (
    <>
      <Head>
        <title>Блог компании DINS</title>
        <meta
          name="description"
          content="Читай наш блог, чтобы узнать последние новости из жизни компании."
        />
        {query.category && <link rel="canonical" href={pathname} />}
      </Head>
      <Layout isVisible={false} greyHeader={false}>
        <Blogs
          data={mock.blogList}
          categories={blogsCategories?.blog_categories}
          blogs={data?.blogs}
        />
        {networkStatus === 3 && <Loader />}
      </Layout>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_BLOGS_CATEGORIES,
  });
  await apolloClient.query({
    query: GET_BLOGS_LIST,
    variables: { categories: query.category, limit: 8 },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default BlogList;
