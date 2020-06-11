import { useDispatch } from 'react-redux'
import { initializeStore } from '../lib/redux'
import { initializeApollo } from '../lib/apollo'
import useInterval from '../lib/useInterval'
import { Layout, Order } from 'containers'

function IndexPage() {
  return (
    <div></div>
  )
}

export async function getStaticProps() {
  const reduxStore = initializeStore()
  const apolloClient = initializeApollo()
  const { dispatch } = reduxStore

  return {
    props: {
      initialReduxState: reduxStore.getState(),
      initialApolloState: apolloClient.cache.extract(),
    },
    unstable_revalidate: 1,
  }
}

export default IndexPage
