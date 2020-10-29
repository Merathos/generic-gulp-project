import { Layout, Story, Article } from 'containers';
import { GET_BLOG_CONTENT } from 'graphql/query';
import { initializeApollo } from 'lib/apollo';

import mock from 'mock/index';

const storyPage = ({ blogs }) => {
  return (
    <Layout backButton greyFooter>
      {blogs[0].type === 'history' ? (
        <Story back={blogs[0]} />
      ) : (
        <Article data={mock.article} back={blogs[0]} />
      )}
      <Story back={blogs[0]} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  const {
    data: { blogs }
  } = await apolloClient.query({
    query: GET_BLOG_CONTENT,
  });

  const paths = blogs.map(el => ({
    params: { slug: el.slug }
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const apolloClient = initializeApollo();

  const {
    data: { blogs }
  } = await apolloClient.query({
    query: GET_BLOG_CONTENT,
    variables: {
      slug: context.params.slug,
    }
  });

  return {
    props: {
      blogs,
    }
  };
}

export default storyPage;
