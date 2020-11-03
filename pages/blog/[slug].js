import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { Layout, BlogList } from 'containers';
import { GET_BLOG_CATEGORIES } from 'graphql/query';
import withApollo from 'lib/withApollo';
import { getDataFromTree } from '@apollo/react-ssr';
import mock from 'mock/index';

const blogPage = () => {
  const router = useRouter();

  const categoriesData = useQuery(GET_BLOG_CATEGORIES, {
    variables: {
      categories: router.query.slug,
    },
  });

  const categories = useMemo(
    () => (!categoriesData.loading ? categoriesData.data.blogs : null),
    [categoriesData.data]
  );
  return (
    <Layout>
      <BlogList mock={mock.blogList} back={categories} />
    </Layout>
  );
};

export default withApollo(blogPage, { getDataFromTree });
