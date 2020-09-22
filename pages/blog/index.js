import { Layout, BlogList } from 'containers';
import { GET_BLOG_LIST } from 'graphql/query';
import { initializeApollo } from 'lib/apollo';

import mock from 'mock/index';

const blogPage = ({ blogs }) => {
  return (
    <Layout backButton>
      <BlogList data={mock.blogList} back={blogs} />
    </Layout>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const {
    data: { blogs }
  } = await apolloClient.query({
    query: GET_BLOG_LIST
  });

  return {
    props: {
      blogs
    }
  };
}

export default blogPage;
