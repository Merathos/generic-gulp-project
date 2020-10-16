import { Layout, BlogList } from 'containers';
import { GET_BLOG_CATEGORIES } from 'graphql/query';
import { initializeApollo } from 'lib/apollo';

import mock from 'mock/index';

const blogPage = ({ blogs }) => {
  return (
    <Layout>
      <BlogList mock={mock.blogList} back={blogs} />
    </Layout>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'tradicii' } },
      { params: { slug: 'nashi-lyudi' } },
      { params: { slug: 'obmen-znaniyami' } },
      { params: { slug: 'zhizn-ofisa' } },
      { params: { slug: 'obuchenie' } },
      { params: { slug: 'charity' } },
      { params: { slug: 'zabota-o-prirode' } }
    ],
    fallback: false
  };
}

export async function getStaticProps(context) {
  const apolloClient = initializeApollo();

  const {
    data: { blogs }
  } = await apolloClient.query({
    query: GET_BLOG_CATEGORIES,
    variables: {
      categories: context.params.slug
    }
  });

  return {
    props: {
      blogs
    }
  };
}

export default blogPage;
