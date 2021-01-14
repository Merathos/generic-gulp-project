import { Layout, Blogs } from 'containers';
import mock from 'mock/index';
import { GET_BLOGS_LIST, GET_BLOGS_CATEGORIES } from 'graphql/blogs';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { initializeApollo } from 'lib/apollo';
import useFetchMore from 'helpers/useFetchMore';
import { Loader } from 'elements';

const BlogList = () => {
  const router = useRouter();

  const { data: blogsCategories } = useQuery(GET_BLOGS_CATEGORIES);
  const { data, fetchMore, networkStatus } = useQuery(GET_BLOGS_LIST, {
    variables: {
      categories: router.query.categories,
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
    resetNext: router.query.categories,
  });

  return (
    <Layout isVisible={false} greyHeader={false}>
      <Blogs
        data={mock.blogList}
        categories={blogsCategories?.blog_categories}
        blogs={data?.blogs}
      />
      {networkStatus === 3 && <Loader />}
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_BLOGS_CATEGORIES,
  });
  await apolloClient.query({
    query: GET_BLOGS_LIST,
    variables: { categories: query.categories, limit: 8 },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default BlogList;
