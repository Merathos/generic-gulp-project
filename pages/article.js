import { initializeStore } from 'lib/redux'
import { initializeApollo } from 'lib/apollo'
import { Layout, Order } from 'containers'
import Title from 'components/Title'

import mock from 'mock/index'

function articlePage() {
  return (
    <Layout>
      <Title data={mock.articleTitle}/>
    </Layout>

  )
}

export async function getStaticProps() {
  const reduxStore = initializeStore()
  const apolloClient = initializeApollo()

  return {
    props: {
      initialReduxState: reduxStore.getState(),
      initialApolloState: apolloClient.cache.extract(),
    },
    unstable_revalidate: 1,
  }
}


export default articlePage
