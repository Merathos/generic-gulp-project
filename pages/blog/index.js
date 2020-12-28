import { Layout, Blogs } from 'containers';
import mock from 'mock/index';
import { GET_BLOGS_LIST, GET_BLOGS_CATEGORIES } from 'graphql/blogs';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { initializeApollo } from 'lib/apollo';

const BlogList = () => {
  const router = useRouter();

  const { data: blogsCategories } = useQuery(GET_BLOGS_CATEGORIES);
  const { data: blogsData } = useQuery(GET_BLOGS_LIST, {
    variables: {
      categories: router.query.categories,
    },
  });

  return (
    <Layout isVisible={false} greyHeader={false}>
      <Blogs
        data={mock.blogList}
        categories={blogsCategories?.blog_categories}
        blogs={blogsData?.blogs}
      />
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
    variables: { categories: query.categories },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default BlogList;
