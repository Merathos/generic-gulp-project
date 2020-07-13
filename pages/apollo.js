import { initializeApollo } from '../lib/apollo'
import Layout from '../fake-components/Layout'
import Submit from '../fake-components/Submit'
import PostList, {
  ALL_POSTS_QUERY,
  allPostsQueryVars,
} from '../fake-components/PostList'

const ApolloPage = () => (
  <Layout>
    <Submit />
    <PostList />
  </Layout>
)

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ALL_POSTS_QUERY,
    variables: allPostsQueryVars,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    unstable_revalidate: 1,
  }
}

export default ApolloPage
