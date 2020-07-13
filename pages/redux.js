import { useDispatch } from 'react-redux'
import { initializeStore } from '../lib/store'
import useInterval from '../lib/useInterval'
import Layout from '../fake-components/Layout'
import Clock from '../fake-components/Clock'
import Counter from '../fake-components/Counter'

const ReduxPage = () => {
  // Tick the time every second
  const dispatch = useDispatch()

  useInterval(() => {
    dispatch({
      type: 'TICK',
      light: true,
      lastUpdate: Date.now(),
    })
  }, 1000)

  return (
    <Layout>
      <Clock />
      <Counter />
    </Layout>
  )
}

export async function getStaticProps() {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  dispatch({
    type: 'TICK',
    light: true,
    lastUpdate: Date.now(),
  });

  return {
    props: {
      initialReduxState: reduxStore.getState(),
    },
    unstable_revalidate: 1
  }
}

export default ReduxPage;
