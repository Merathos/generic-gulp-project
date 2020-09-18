import { Layout, Story } from 'containers';
import { GET_BLOG_CONTENT } from 'graphql/query';
import { initializeApollo } from 'lib/apollo';

import mock from 'mock/index';

const storyPage = ({ blogs }) => {
  return (
    <Layout backButton greyFooter>
      <Story data={mock.story} back={blogs[0]} />
    </Layout>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const {
    data: { blogs }
  } = await apolloClient.query({
    query: GET_BLOG_CONTENT
  });

  return {
    props: {
      blogs
    }
  };
}

export default storyPage;
