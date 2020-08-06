import { Layout, Catalog } from 'containers';
import { useQuery } from '@apollo/react-hooks';
import mock from 'mock/index';
import { GET_CONTENT } from 'graphql/query';
import { initializeApollo } from '../lib/apollo';
import PostList, {
  ALL_POSTS_QUERY,
  allPostsQueryVars,
} from '../fake-components/PostList';

const catalogPage = ({ vacancies }) => {
  // const { vacancies } = useQuery(GET_CONTENT);
  return (
    <Layout backButton>
      <Catalog data={mock.catalog} vacancies={vacancies} />
    </Layout>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const { data: { vacancies } } = await apolloClient.query({
    query: GET_CONTENT
  });

  return {
    props: {
      vacancies
    }
  };
}

export default catalogPage;
