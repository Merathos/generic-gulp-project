// import { useMemo } from 'react';
// import { ApolloClient } from 'apollo-client';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { HttpLink } from 'apollo-link-http';
import { initializeApollo } from '../lib/apollo';
import Postlist, {
  ALL_POSTS_QUERY,
  allPostsQueryVars,
} from 'helpers/Postlist'

let apolloClient;

const ApolloPage = () => (
  <Postlist />
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

// function createApolloClient() {
//   return new ApolloClient({
//     ssrMode: typeof window === 'undefined',
//     link: new HttpLink({
//       uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn',
//       credentials: 'same-origin',
//     }),
//     cache: new InMemoryCache(),
//   })
// }

// export function initializeApollo(initialState = null) {
//   const _apolloClient = apolloClient ?? createApolloClient()

//   if (initialState) {
//     _apolloClient.cache.restore(initialState)
//   }
//   if (typeof window === 'undefined') return _apolloClient
//   if (!apolloClient) apolloClient = _apolloClient

//   return _apolloClient
// }

// export function useApollo(initialState) {
//   const store = useMemo(() => initializeApollo(initialState), [initialState])
//   return store
// }

export default ApolloPage;
